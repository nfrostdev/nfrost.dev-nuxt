export default function (doc) {
  if (doc.isBroken) {
    return '/not-found';
  }

  if (doc.type === 'project') {
    return '/' + doc.uid;
  }

  return '/not-found';
};
