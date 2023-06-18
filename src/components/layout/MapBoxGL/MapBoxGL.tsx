import * as React from "react";
import mapboxgl from "mapbox-gl";
import "./MapBoxGL.scss";
import "mapbox-gl/dist/mapbox-gl.css";
// импортируем стили mapbox-gl чтобы карта отображалась коррекно

function MapBoxGL() {
  // здесь будет хранится инстанс карты после инициализации
  const [map, setMap] = React.useState<mapboxgl.Map>();

  // React ref для хранения ссылки на DOM ноду который будет 
  // использоваться как обязательный параметр `container` 
  // при инициализации карты `mapbox-gl`
  // по-умолчанию будет содержать `null`
  const mapNode = React.useRef(null);

  React.useEffect(() => {
    const node = mapNode.current;
    // если объект window не найден,
    // то есть компонент рендерится на сервере
    // или dom node не инициализирована, то ничего не делаем
    if (typeof window === "undefined" || node === null) return;

    // иначе создаем инстанс карты передавая ему ссылку на DOM ноду
    // а также accessToken для mapbox
    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.REACT_APP_NEXT_PUBLIC_MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11", 
      center: [30.5, 50.4],
      zoom: 9,
    });
    // и сохраняем созданный объект карты в React.useState
    setMap(mapboxMap);

    const marker = new mapboxgl.Marker({
      color: "#FF0000",
      draggable: true
    }).setLngLat([30.5, 50.4])
      .addTo(mapboxMap);
    // чтобы избежать утечки памяти удаляем инстанс карты
    // когда компонент будет демонтирован
    return () => {
      mapboxMap.remove();
    };
  }, []);

  return (
    <div className="mapBox_bord">
      <div ref={mapNode} className="mapBox_content" />
    </div>

  )
}

export default MapBoxGL