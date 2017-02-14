class SortOrder {
  constructor(args = {}){
    this.key = args.key || 'name';
    if(typeof args.asc !== 'undefined')
      this.asc =  args.asc
    else
      this.asc = true
  }
}

export default SortOrder;