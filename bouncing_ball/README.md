1. HTML, CSS 초기 설정
2. this.resize.bind(this)
   bind, call, apply 는 함수의 this값을 원하는 객체로 변경하고 새로운 함수를 반환한다.  
   밑의 예제에서 바인딩을 안해주면 this값은 전역객체를 가르킨다.

   ```js
   const obj = { value: 42 };

   function getValue() {
     return this.value;
   }

   const boundGetValue = getValue.bind(obj); // obj를 this로 설정하는 새로운 함수를 생성

   console.log(boundGetValue()); // 42 (this는 obj로 설정됨)
   ```

   ```js
   const obj = { value: 42 };

   function getValue() {
     return this.value;
   }

   console.log(getValue.call(obj)); // 42 (this는 obj로 설정됨)
   ```

   ```js
   const obj = { value: 42 };

   function addValues(a, b) {
     return this.value + a + b;
   }
   console.log(addValues.apply(obj, [10, 20])); // 72 (this는 obj로 설정되고, 인수는 배열로 전달됨)
   ```

3. requstedAnimation
   자바스크립트 애니메이션 관련 최적화 API
   requestAnimationFrame

   - 백그라운드 동작 중지
   - 디스플레이 주사율에 맞게 호출
   - 애니메이션 큐에서 별도로 처리
   - 사용법
     ```js
     let raf; // requestAnimationFrame을 담을 변수
     const performAnimation = () => {
       // 특정한 조건일 경우 raf를 중지하고 콜백 종료
       if (조건) {
         cancelAnimationFrame(raf);
         return;
       }
       raf = requestAnimationFrame(performAnimation); // 함수 내부에서 다시 requestAnimationFrame을 호출하여 반복
     };
     requestAnimationFrame(performAnimation);
     ```

4. canvas API 사용법
   상세한 예제는 example/canvas.html 에서 확인 가능
