---
sidebar_position: 1
---

# Introduction

openlayers7 을 react 컴포넌트 다루듯 사용해보세요.

## Concepts

---

### Based on Openlayers7

`react-openlayers7`은 `openlayers7` 라이브러리를 기반으로, 쉬운 사용성을 목표로 만들어진 추상화된 **react component 라이브러리**입니다.

### Rendering

`Provider`를 담당하는 `Map`컴포넌트를 제외하고 `react-openlayers7`의 나머지 컴포넌트들은 Dom을 형성하지 않습니다. openlayers는 `canvas` 태그 위에 레이어들이 그려지는 형태로 렌더링되기 때문에 `react-openlayer7`의 컴포넌트들도 `Map` 컴포넌트를 제외하고 Dom이 필요하지 않습니다.

### For Web Application

웹 어플리케이션을 개발할때, 대개 지도 위에 표시되는 어노테이션들(`Marker`, `Polygon`, `Polyline`)에 대한 정보를 서버DB 에 저장합니다.
이를 위해 `Draw`와 동시에 결과물을 표시하지 않고 `feature`를 콜백으로 제공하거나, 낙관적 업데이트를 위해 화면에 선제적으로 표시하게 하는 등 어플리케이션 개발을 위한 사용자들에 초점을 맞춰 설계됐습니다.

## Lifecycle process

---

1. `Map` 컴포넌트는 입력된 `props`의 기본값을 반영해 인스턴스를 만들고, 자신이 위치한 곳에서 `<canvas>` 요소를 렌더링합니다.
2. 생성된 인스턴스는 `ContextAPI`에 저장되고 `Provider`를 통해 하위로 공유됩니다.
3. `<Map></Map>` 컴포넌트 `{children}`에 위치한 컴포넌트들은 각자 자신이 가진 로직을 실행하며 `Context`에 실려있는 `Map`에 자신의 책임 기능들을 추가합니다.
4. 하위 컴포넌트들은 자신의 라이프사이클을 따라 마운드와 동시에 `Map`에 추가되고 언마운트와 동시에 `Map` 에서 제거됩니다.
5. 컴포넌트들의 업데이트로 인한 리렌더링 발생시, 일단 맵에서 제거된 후 변경된 내용으로 인스턴스가 만들어지고 다시 맵에 추가되는 형태로 업데이트 됩니다.

## Limitations

---

- 사용 빈도가 잦아보이는 기능들을 우선적으로 제공하고 있기 때문에 `react-openlayers7`의 컴포넌트들은 `openlayers7` 라이브러리가 제공하는 모든 기능과 설정들을 담고 있지 않습니다.
- `react-openlayers7`의 컴포넌트들은 `openlayer7`에서 제공하는 객체들로 구성되어 있기 때문에 `<Map>` 컴포넌트를 통해 `context`에 실려있는 `Map 객체`를 활용해 추가로 구현하고자 하는 기능들을 구현해 콜라보레이션이 가능합니다.
