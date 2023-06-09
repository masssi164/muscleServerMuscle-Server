import { Joints, MuscleStruct } from "../controler/DbHandler";


export interface MuscleComparisonResult {
    isEqual: boolean;
    explanation: string;
  }
  
  export default function compareMuscles(currentMuscle: MuscleStruct, lastMuscle: MuscleStruct): MuscleComparisonResult[] {
    const result: MuscleComparisonResult[] = [];
  
    // Vergleich von Innervationen
    const innervationComparison = compareInnervations(currentMuscle.innervation, lastMuscle.innervation);
    result.push({ isEqual: innervationComparison, explanation:innervationComparison?"Innervation ist identisch":"Innervationen sind nicht identisch"});
  
    // Vergleich von Bewegungen
    compareFixedPoints(currentMuscle,lastMuscle).forEach(value => result.push(value))
    compareMovements(currentMuscle,lastMuscle).forEach(value => result.push(value))
    // Vergleich von Fixpunkten
    
    return result;
  }

  export function compareInnervations(c_innervation:string,l_innervation:string): boolean {
    // Compare innervations logic here
    // Return true or false based on comparison
    return c_innervation === l_innervation?true:false
  }
  
  export function compareMovements(currentMuscle:MuscleStruct, lastMuscle:MuscleStruct): MuscleComparisonResult[] {
    let result:MuscleComparisonResult[] =[]
    
        
  // Prüfen, wie viele Gelenke von currentMuscle in lastMuscle sind
  const equalJoints: Joints[] = currentMuscle.joints.filter(joint => {
    return lastMuscle.joints.some(joint_last => joint.bez === joint_last.bez);
  });

  // Prüfung ob die Bewegung in equalJoints der Bewegung in lastJoints entspricht
  equalJoints.forEach(joint => {
    const lastJoint = lastMuscle.joints.find(last_joint => joint.bez === last_joint.bez);
    if (lastJoint) {
      const movements: string[] = joint.funcs.filter(func => lastJoint.funcs.includes(func));
      movements.forEach(move => {
        result.push({
          isEqual: true,
          explanation: `${move} findet in ${joint.bez} sowohl durch ${currentMuscle.name} als auch ${lastMuscle.name} statt`
        });
      });
    }
  });

    if(result.length < 1) {
        result.push({
            isEqual:false,
            explanation:`es wurde keine übereinstimmende Funktion von ${currentMuscle} und ${lastMuscle} gefunden}`
        })
    }
    return result
  }

  export function compareFixedPoints(currentMuscle: MuscleStruct, lastMuscle: MuscleStruct): MuscleComparisonResult[] {
    let result: MuscleComparisonResult[] = [];
  
    // Vergleich der Ursprünge (oregines) von currentMuscle mit Ursprüngen (oregines) und Ansätzen (insertiones) von lastMuscle
    const commonOrigins = currentMuscle.oregines.filter(origin => lastMuscle.oregines.includes(origin) || lastMuscle.insertiones.includes(origin));
    const commonInsertions = currentMuscle.insertiones.filter(insertion => lastMuscle.oregines.includes(insertion) || lastMuscle.insertiones.includes(insertion));
  
    // Überprüfung der gemeinsamen Ursprünge
    commonOrigins.forEach(orego => {
      // Überprüfung, ob der gemeinsame Ursprung auch ein gemeinsamer Ansatz ist
      const kindOfFixAtLatMuscle = lastMuscle.insertiones.includes(orego) ? "Ansatz" : "Ursprung";
      // Erstellung einer Erklärung für den gemeinsamen Ursprung
      const explanationStr = `${orego}, der Ursprung von ${currentMuscle.name} ist identisch zum ${kindOfFixAtLatMuscle} von ${lastMuscle.name}`;
      result.push({
        isEqual: true,
        explanation: explanationStr
      });
    });
  
    // Überprüfung der gemeinsamen Ansätze
    commonInsertions.forEach(insertio => {
      // Überprüfung, ob der gemeinsame Ansatz auch ein gemeinsamer Ursprung ist
      const kindOfFixAtLatMuscle = lastMuscle.insertiones.includes(insertio) ? "Ansatz" : "Ursprung";
      // Erstellung einer Erklärung für den gemeinsamen Ansatz
      const explanationStr = `${insertio}, der Ansatz von ${currentMuscle.name} ist identisch zum ${kindOfFixAtLatMuscle} von ${lastMuscle.name}`;
      result.push({
        isEqual: true,
        explanation: explanationStr
      });
    });
  
    // Überprüfung, ob keine gemeinsamen Ursprünge oder Ansätze gefunden wurden
    if (result.length < 1) {
      result.push({
        isEqual: false,
        explanation: `Weder ein Ursprung noch ein Ansatz von ${currentMuscle.name} entspricht einem Ursprung oder Ansatz von ${lastMuscle.name}`
      });
    }
  
    return result;
  }
  