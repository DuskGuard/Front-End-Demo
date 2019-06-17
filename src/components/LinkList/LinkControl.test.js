import Node from './Node'
import LinkControl from './LinkControl'
//first node in sequence cannot be replaced
//direction of flow is downwards to the tail
test("a Single Node '(a)'       ",()=>{
    let controller= new LinkControl();
    expect(controller.current).toBe(null);
    controller.insertNode("Trent",10);
    expect(controller.current.subject).toBe("Trent"); 
    expect(controller.current.prev).toBe(controller.head);
    expect(controller.current.next).toBe(controller.tail);
    expect(controller.anchor).toBe(null)
})

test("replace last node (a)-'(b)'      ",()=>{
    let controller= new LinkControl();
    controller.insertNode("Trent",10);
    expect(controller.current.subject).toBe("Trent");
    expect(controller.current.prev).toBe(controller.head);
    expect(controller.current.next).toBe(controller.tail);
    expect(controller.anchor).toBe(null)
    controller.insertNode("Luis",20);
        expect(controller.current.subject).toBe("Luis")
        expect(controller.current.prev).toBe(controller.temp);
        expect(controller.current.next).toBe(controller.tail)
        expect(controller.current.next).toBe(controller.tail)
})

test("add Node between two Nodes (a)-'(c)'-(b)     ",()=>{
    let controller= new LinkControl();
    controller.insertNode("Trent",10);
    expect(controller.current.subject).toBe("Trent");
    controller.insertNode("Luis",20);
    expect(controller.current.subject).toBe("Luis");
        let posanchor= controller.current.prev;
        controller.current=posanchor;
        expect(controller.current.subject).toBe("Trent");
        controller.insertNode("Han",30);
            expect(controller.current.subject).toBe("Han");
            expect(controller.current.prev).toBe(controller.temp);
            expect(controller.current.next).toBe(controller.anchor);
            expect(controller.temp.subject).toBe("Trent");
            expect(controller.temp.next).toBe(controller.current);
            expect(controller.anchor.subject).toBe("Luis")
            expect(controller.anchor.prev).toBe(controller.current);
})


test("the first,last,back and forward methods",()=>{
    let controller= new LinkControl();
    controller.insertNode("Trent",10);
    expect(controller.current.subject).toBe("Trent");
    controller.insertNode("Luis",20);
    expect(controller.current.subject).toBe("Luis");
        let posanchor= controller.current.prev;
        controller.current=posanchor;
        expect(controller.current.subject).toBe("Trent");
        controller.insertNode("Han",30);
            expect(controller.current.subject).toBe("Han");
            expect(controller.current.prev).toBe(controller.temp);
            expect(controller.current.next).toBe(controller.anchor);
            expect(controller.temp.subject).toBe("Trent");
            expect(controller.temp.next).toBe(controller.current);
            expect(controller.anchor.subject).toBe("Luis")
            expect(controller.anchor.prev).toBe(controller.current);
                controller.first();
                expect(controller.current.subject).toBe("Trent");
                controller.last();
                expect(controller.current.subject).toBe("Luis");
                controller.back();
                expect(controller.current.subject).toBe("Han");
                controller.forward();
                expect(controller.current.subject).toBe("Luis");
            
})

test("add Node between two Nodes (a)-'(c)'-(b)     ",()=>{
    let controller= new LinkControl();
    controller.insertNode("Trent",10);
    expect(controller.current.subject).toBe("Trent");
    controller.insertNode("Luis",20);
    expect(controller.current.subject).toBe("Luis");
        let posanchor= controller.current.prev;
        controller.current=posanchor;
        expect(controller.current.subject).toBe("Trent");
        controller.insertNode("Han",30);
            expect(controller.current.subject).toBe("Han");
            expect(controller.current.prev).toBe(controller.temp);
            expect(controller.current.next).toBe(controller.anchor);
            expect(controller.temp.subject).toBe("Trent");
            expect(controller.temp.next).toBe(controller.current);
            expect(controller.anchor.subject).toBe("Luis")
            expect(controller.anchor.prev).toBe(controller.current);
})


test("delete methods",()=>{
    let controller= new LinkControl();
    controller.insertNode("Trent",10);
    expect(controller.current.subject).toBe("Trent");
    controller.insertNode("Luis",20);
    expect(controller.current.subject).toBe("Luis");
        let posanchor= controller.current.prev;
        controller.current=posanchor;
        expect(controller.current.subject).toBe("Trent");
        controller.insertNode("Han",30);
            expect(controller.current.subject).toBe("Han");
            expect(controller.current.prev).toBe(controller.temp);
            expect(controller.current.next).toBe(controller.anchor);
            expect(controller.temp.subject).toBe("Trent");
            expect(controller.temp.next).toBe(controller.current);
            expect(controller.anchor.subject).toBe("Luis")
            expect(controller.anchor.prev).toBe(controller.current);
                controller.first();
                expect(controller.current.subject).toBe("Trent");
                controller.last();
                expect(controller.current.subject).toBe("Luis");
                controller.back();
                expect(controller.current.subject).toBe("Han");
                controller.forward();
                expect(controller.current.subject).toBe("Luis");
                    controller.back();
                    expect(controller.current.subject).toBe("Han");
                    controller.deleteNode();
                    expect(controller.current.subject).toBe("Trent");
                    expect(controller.current.next).toBe(controller.anchor)
                    expect(controller.anchor.subject).toBe("Luis")
                    expect(controller.anchor.prev).toBe(controller.current)
})

test("totalAmount method",()=>{
    let controller= new LinkControl();
    controller.insertNode("Trent",10);
    expect(controller.current.subject).toBe("Trent");
    controller.insertNode("Luis",20);
    expect(controller.current.subject).toBe("Luis");
    expect(controller.totalAmount()).toBe(30);
    controller.insertNode("Han",70);
        expect(controller.totalAmount()).toBe(100);
        expect(controller.current.prev.subject).toBe(controller.temp.subject);
        controller.deleteNode();
        expect(controller.totalAmount()).toBe(30);
        expect(controller.counter).toBe(2)
})

test("test Head Functionality",()=>{
    let controller= new LinkControl();
    controller.insertNode("Trent",10);
    expect(controller.current.subject).toBe("Trent");
    controller.insertNode("Luis",20);
    expect(controller.current.subject).toBe("Luis");
    expect(controller.totalAmount()).toBe(30);
    controller.insertNode("Han",70);
        controller.back();
        controller.back();
        controller.back();
     expect(controller.current.subject).toBe("Head")
     controller.forward();
     controller.forward();
     controller.forward();
     expect(controller.current.subject).toBe("Han")
})


test("test fifo and lifo",()=>{
    let controller= new LinkControl();
    controller.insertNode("Trent",10);
    expect(controller.current.subject).toBe("Trent");
    controller.insertNode("Luis",20);
    expect(controller.current.subject).toBe("Luis");
    expect(controller.totalAmount()).toBe(30);
    controller.insertNode("Han",70);
        controller.back();
        controller.back();
        controller.back();
     expect(controller.current.subject).toBe("Head")
        expect(controller.fifo()).toEqual("The First Node In Is Trent w/ 10")
        expect(controller.lifo()).toEqual("The First Node In Is Han w/ 70")
})
