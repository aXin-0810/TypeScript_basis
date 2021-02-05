interface h {
  a:string
  b:number
  c?:boolean
  [key:string]:any
}

export class aaa {
  constructor(){
    
  }
  baba(){
    var k:h = {
      a:"1",
      b:1,
      c:true,
      l:0
    }
    console.log(k)
  }
}
