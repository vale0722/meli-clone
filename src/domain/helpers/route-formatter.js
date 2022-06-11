export function formatterItemRoute(category, id, name) {
  return "/" + category + "/" + id + "/" + formatterToSlug(name);
}

export function formatterToSlug(name) {
  return name.toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
}