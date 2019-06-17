import City from './City'
import Community from './Community'
test("Testing Controller", () => {
    let controller= new Community();
    controller.createCity("Calgary",50,70,40000);
    expect(controller.List.length).toBe(1);
    controller.createCity("Nassau",-20,70,6000);
    expect(controller.List.length).toBe(2);
    controller.createCity("Edmonton",51,70,16000);
    expect(controller.mostNorth()).toBe("Edmonton");
    controller.createCity("Peru",-21,70,6000);
    expect(controller.mostSouth()).toBe("Peru");
    expect(controller.totalPop()).toBe(68000);
    controller.deleteCity("Calgary")
    expect(controller.List.length).toBe(3);
    expect(controller.List[0].cityName).toBe("Nassau");


})
test("140e", () => {
   let myCity = new City("Nassau",-50,80,8000);
   let favCity=myCity ;
   console.log(myCity,favCity,"Compared The Two") ;
   favCity.movedIn(800);
   console.log(myCity,favCity,"Compared The Two") ;
})
