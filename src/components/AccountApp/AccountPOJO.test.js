import Account from "./AccountPOJO";

test('Test the Account balance and Account name', () => {
    console.log('Hello World');
    const account = new Account(0, "Cheryl_Chequing");

    expect(account.balance).toBe(0);
    expect(account.name).toBe("Cheryl_Chequing");
 });

 test('Test the deposit', () => {
    console.log('Hello World 2');
    const account = new Account(0, "Cheryl_Chequing");
    account.deposit(20);
    expect(account.balance).toBe(20);
 });

 test('Test the withdraw', () => {
    console.log('Hello World 3');
    
    const account = new Account(30, "Cheryl_Chequing");
    account.withdraw(20);
    expect(account.balance).toBe(10);

    account.withdraw(40);
    expect(account.balance).toBe(10);

    account.withdraw(-20);
    expect(account.balance).toBe(10);

    account.withdraw("a");
    expect(account.balance).toBe(10);
 });

 test('Test the current balance', () => {
    console.log('Hello World 4');
    const account = new Account(100, "Cheryl_Chequing");
    const currentBalance = account.getBalance();
    expect(currentBalance).toBe(100);
 });


 test('Test the renaming the account', () => {
   console.log('Hello World 5');
   const account = new Account(100, "Cheryl_Chequing");
   account.renameAccount("Trent's Savings");
   expect(account.name).toBe("Trent's Savings")
});

