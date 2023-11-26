export class Todo {
    public sno: number;
    title: string;
    desc: string;
    active: boolean;
  
    constructor() {
      this.sno = 0;
      this.title = '';
      this.desc = '';
      this.active = true;
    }
  }
  