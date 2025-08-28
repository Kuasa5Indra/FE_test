export interface Gerbang {
  id: number
  IdCabang: number
  NamaGerbang: string
  NamaCabang: string
}

export interface GerbangRow {
  count: number
  rows: Gerbang[]
}

export interface GerbangPaginated {
  total_pages: number
  current_page: number
  count: number
  rows: GerbangRow
}
