class SortOrder {
  constructor(args = {}){
    this.key = args.key || 'id',
    this.direction =  args.direction || 'asc'
  }
}

export default SortOrder;