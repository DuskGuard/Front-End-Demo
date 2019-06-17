import AccountsPOJO from "./AccountsPOJO";
import AccountPOJO from "./AccountPOJO";

test('Add an Initial Account', () => {
    console.log("Hello World from test the Add an Initial Account");

    const tempAccount = new AccountPOJO(0, "Cheryls Chequing");
    expect(tempAccount.name).toBe("Cheryls Chequing");
    expect(tempAccount.balance).toBe(0);
    console.log("This is your test tempAccount:", tempAccount)

    const testObject = new AccountsPOJO();
    console.log("This is your testArray:", testObject);
  
    testObject.addAccounts(0, "Cheryls Chequing");
    testObject.addAccounts(1, "Alexs Chequing");
    console.log("This is your new testArray", testObject);

    console.log("This is testArray balance:", testObject.arrControl.length);
});

test('Test Delete Account', () => {
    console.log("Hello World from Delete Account");
    const testObject = new AccountsPOJO();
    testObject.addAccounts(0, "Cheryls Chequing");
    testObject.addAccounts(1, "Alexs Chequing");
    
    // const itemToRemove = 'Cheryls Chequing';
    // const deleteArray = testArray.arrControl.filter(item => item.name !== itemToRemove);
    // console.log("This is the newd array after being deleted:", deleteArray)
    // testArray.deleteAccount("Cheryls Chequing");

    testObject.deleteAccount(testObject.arrControl[0].name);
    console.log("This is the testObject:", testObject);
    expect(testObject.arrControl[0].name).toBe("Alexs Chequing");
});

test('Test the min, max and total Account', () => {
    console.log("Hello World from min and max Account");
    const testObject = new AccountsPOJO();
    testObject.addAccounts(1, "Cheryls Chequing");
    testObject.addAccounts(2, "Alexs Chequing");
    testObject.addAccounts(3, "Lindens Chequing");
    testObject.addAccounts(4, "Maddies Chequing");

    console.log("This is your test object:", testObject.arrControl);

    testObject.minAccount(testObject.arrControl);
    // expect(testObject.arrControl[0].balance).toBe(25);

    testObject.maxAccount(testObject.arrControl);
    // expect(testObject.arrControl[3].balance).toBe(100);
 
    testObject.totalAccount(testObject.arrControl);
    // expect(testObject.totalAccount()).toBe(10);

});