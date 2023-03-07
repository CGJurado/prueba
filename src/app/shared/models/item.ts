export interface Item {
  id: number
  photo: string
  text: string
}

export class ItemsData {
  private items: Item[]
  private sourceItems: Item[]

  constructor(len: number, private pageSize: number) {
    this.sourceItems = this.items = [...Array(len)].map((_, idx) => this.getRandomItemWithIndex(idx + 1))
  }

  public get Items(): Item[] { return this.items }

  getItems(page: number): Promise<Item[]> {
    return new Promise(resolve => {
      const res = this.getItemsFromPage(page)
      resolve(res)
    })
  }

  getFilteredItems(page: number, value: string): Promise<Item[]> {
    return new Promise(resolve => {
      if (value !== '') {
        this.items = this.sourceItems.filter(item => (`${item.id} ${item.text}`).includes(value))
      } else {
        this.items = this.sourceItems
      }
      const res = this.getItemsFromPage(page)
      resolve(res)
    })
  }

  private getRandomItemWithIndex(idx: number): Item {
    return {
      id: idx,
      photo: `https://picsum.photos/80/80?random=${idx}`,
      text: `${Math.random().toString(36).slice(2, 7)}`
    }
  }

  private getItemsFromPage(page: number): Item[] {
    const startLen = this.pageSize * page
    return this.Items.slice(startLen, startLen + this.pageSize)
  }

}
