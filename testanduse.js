/**
 * @param {(thingToTestAndUse:any)=>boolean} isValidThingToTestFn
 * @param {(thingToTestAndUse:any)=>boolean} isPreviouslyEncounteredFn
 * @param {(thingToTestAndUse:any)=>any} getTestResultFn
 * @param {(thingToTestAndUse: any, testResult: any) => void} useTheTestedThingFn
 */
 export function setTestAndUseConfig(
  isValidThingToTestFn,
  isPreviouslyEncounteredFn,
  getTestResultFn,
  useTheTestedThingFn
) {
  isValidThingToTest = isValidThingToTestFn;
  isPreviouslyEncountered = isPreviouslyEncounteredFn;
  getTestResult = getTestResultFn;
  useTheTestedThing = useTheTestedThingFn;
}

/**
 * tests and uses the thing to be tested and subsequently used
 *
 * @param {any} thingToTestAndUse
 */
export function testAndUse(thingToTestAndUse) {
  if(thingToTestAndUse == null) {
    // definitely not valid
    return;
  }
  if (!isValidThingToTest(thingToTestAndUse)) {
    return;
  }
  if (isPreviouslyEncountered(thingToTestAndUse)) {
    return;
  }
  let testResult;
  try{
   testResult = getTestResult(thingToTestAndUse);
  }catch(e) {
   testResult = e;
  } 
  useTheTestedThing(thingToTestAndUse, testResult);
}

/**
 * @type {(thingToTestAndUse:any)=>boolean}
 */
let isValidThingToTest;

/**
 * @type {(thingToTestAndUse:any)=>boolean}
 */
let isPreviouslyEncountered;

/**
 * @type {(thingToTestAndUse:any)=>any}
 */
let getTestResult;

/**
 * @type {(thingToTestAndUse:any, testResult: any)=>void}
 */
let useTheTestedThing;
