import { Observable, Subject, interval } from "rxjs";
import { debounce } from "rxjs/operators";

export type ITObject = { [index: string]: any };

/**
 * 删除Object中为undefined的项
 * @param values Object
 */
export function deleteObjectItemIfUndefined(values: ITObject) {
  Object.keys(values).forEach((ele) => {
    if (values[ele] === undefined) {
      delete values[ele];
    }
  });
  return values;
}

/**
 *
 * @param list 去重的对象数组
 * @param uuid 判断数组中对象重复的项-键值字符
 */
export function unique<T extends ITObject>(list: T[], uuid: string) {
  const ids: string[] = [];
  return list.reduce((item: T[], next: T) => {
    if (!ids.includes(next[uuid])) {
      item.push(next);
      ids.push(next[uuid]);
    }
    return item;
  }, []);
}

const urlAlphabet =
  "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
const numAlphabet = "123456789";
/**
 * 生成随机字符串
 * @param size 生成的字符串长度
 */
export const nanoid = (size = 36) => {
  let id = "";
  let i = size;
  while (i--) {
    id += urlAlphabet[(Math.random() * 64) | 0];
  }
  return id;
};

/**
 * 生成随机数字
 * @param size 生成随机数字长度
 */
export const nanoNumid = (size = 6): number => {
  let id = "";
  let i = size;
  while (i--) {
    id += numAlphabet[(Math.random() * 10) | 0];
  }
  return Number(id);
};

/**
 *
 * @param onDebounce$ 函数防抖
 */
export function debounceSubject(
  onDebounce$: Subject<unknown>
): Observable<unknown> {
  return onDebounce$.pipe(debounce(() => interval(249)));
}

interface LabelItem {
  label: string;
  value: string | number;
  color?: string;
}
export function getLabel(list: LabelItem[], value: string | number) {
  const label =
    list.filter((item: LabelItem) => item.value === value)[0]?.label || "";
  return label;
}
export function getColor(list: LabelItem[], value: string | number) {
  const color =
    list.filter((item: LabelItem) => item.value === value)[0]?.color || "";
  return color;
}

export function downloadExcel(blob: any, filename: string) {
  let blobs = new Blob([blob], {
    type: "application/actet-stream;charset=utf-8",
  });
  let downloadElement = document.createElement("a");
  let href = window.URL.createObjectURL(blobs); //创建下载的链接
  downloadElement.style.display = "none";
  downloadElement.href = href;
  downloadElement.download = filename; //下载后文件名
  document.body.appendChild(downloadElement);
  downloadElement.click(); //点击下载
  document.body.removeChild(downloadElement); //下载完成移除元素
  window.URL.revokeObjectURL(href); //释放掉blob对象
}
