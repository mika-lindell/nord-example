class User{
  
  constructor(args){
    this.id = args.id || 0;
    this.name = args.name ||null;
    this.age = args.age || null;
    this.gender = args.gender || null;
  }

}

export default User;