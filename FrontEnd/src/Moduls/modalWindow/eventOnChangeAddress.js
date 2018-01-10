/**
 * Меняет состояние взависимости от выбранного города в списке
 * @param places данные с адрессами, полученые из модуля elementMapSearchBox
 */

export default function (places) {
  if (places === undefined || places.length === 0) return;

  const place = places[0];

  this.state = {
    name: place.name,
    coordinates: {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()},
  };
}