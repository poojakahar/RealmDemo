import realm from "../Model/index";

export const add = (obj) => {
  realm.write(() => {
    realm.create('Person', obj);
  });

};

export const getAll = () => {
  return realm.objects('Person');
};

export const removeAll = () => {
  realm.write(() => {
    realm.deleteAll();
  });
};
