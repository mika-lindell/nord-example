class SortOrder {
  constructor(args = {}){
    this.key = args.key || 'id';
    if(typeof args.asc !== 'undefined')
      this.asc =  args.asc
    else
      this.asc = true
  }
}

export default SortOrder;