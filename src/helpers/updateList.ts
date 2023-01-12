export function updateList<DataType extends { [key: string]: any }, Key = any>({
  data,
  key,
  valueOfKey,
  id,
  actions = ['update'],
  conditionKey = 'slug',
  objectLevels,
  newObject,
}: {
  newObject?: any;
  data: any[];
  id?: string;
  key?: Key;
  valueOfKey?: any;
  actions?: Array<'add' | 'update' | 'remove' | '++' | '--'>;
  conditionKey?: keyof DataType;
  objectLevels?: Array<keyof DataType>;
}) {
  let newRef: any[] = JSON.parse(JSON.stringify(data));
  let newList: DataType[] = [];

  // map actions
  actions.forEach(action => {
    // --------------- update item in list ---------------
    if (objectLevels?.length === 1 && key && action === 'update') {
      newRef.forEach(item => {
        if (item[objectLevels[0]][conditionKey] === id?.replace('/', ''))
          item[objectLevels[0]][key] = valueOfKey;
        newList.push(item);
      });
      newRef = JSON.parse(JSON.stringify(newList));
    } else if (action === 'update' && key) {
      newRef.forEach(item => {
        if (item[conditionKey] === id?.replace('/', '')) item[key] = valueOfKey;
        newList.push(item);
      });
      newRef = JSON.parse(JSON.stringify(newList));
    } else if (action === '++' || (action === '--' && key)) {
      newRef.forEach(item => {
        if (item[conditionKey] === id?.replace('/', '')) item[key] = item[key] + 1;
        newList.push(item);
      });
      newRef = JSON.parse(JSON.stringify(newList));
    } else if (action === 'add' && newObject) {
      const isOn = newRef.find(item => item[conditionKey] === id);
      if (!isOn) {
        let _newObject = JSON.parse(JSON.stringify(newObject));
        if (_newObject[conditionKey] === id?.replace('/', '')) _newObject[key] = valueOfKey;
        newList = [_newObject, ...newRef];
        newRef = JSON.parse(JSON.stringify(newList));
      } else newList = newRef;
    } else if (action === 'remove') {
      newList = newRef;
      newList = newList.filter(item => item[conditionKey] !== id?.replace('/', ''));
      newRef = JSON.parse(JSON.stringify(newList));
    }
  });

  return newList;
}
