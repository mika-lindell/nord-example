class User{
  
  constructor(args = {}){
    this.id = args.id || 0;
    this.name = args.name || '';
    this.age = args.age || 0;
    this.gender = args.gender || '';
    this.status = args.status || 'ready';
  }

}

export default User;