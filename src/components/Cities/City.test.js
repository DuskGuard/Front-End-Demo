import City from './City'
test("test show function", () => {
    const Metro = new City("Calgary",50,100,50000);
    expect((Metro.show())).toEqual("Calgary 50 100 50000");
    expect(Metro.movedIn(1000)).toBe(51000);
    expect(Metro.movedOut(5000)).toBe(46000);
    expect(Metro.howBig()).toBe("Large Town");
    expect(Metro.movedOut(40000)).toBe(6000);
    expect(Metro.howBig()).toBe("Town");




    
})