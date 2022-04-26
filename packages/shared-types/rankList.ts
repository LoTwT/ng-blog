export interface IRankList<T extends { name: string } = { name: string }> {
  icon?: string
  title: string
  items: T[]
}
