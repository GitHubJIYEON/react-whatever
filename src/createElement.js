/**
 * JSX를 Javascript 객체로 변환하는 createElement 함수 구현
 *
 * @param {string|function} type - 요소의 타입 (태그 이름+프래그먼트 또는 컴포넌트)
 * @param {object} props - 요소의 속성 객체
 * @param {any[]} children - 자식 요소들 (text)
 * @returns {object} JSX를 나타내는 객체
 */

export function createElement(type, props = {}, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.length === 1 ? children[0] : children,
    },
  };
}
