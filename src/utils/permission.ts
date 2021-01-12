export interface Menu {
  key: string;
  title: string;
  children: Menu[];
  isExpend: boolean;
  link: string;
}
