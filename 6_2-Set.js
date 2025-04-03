// set을 활용하여 영화 시청 기록을 관리하는 프로그램 제작

// set 생성
const watchedMovies = new Set();

// 데이터 추가
watchedMovies.add("Inception");
watchedMovies.add("Interstellar");
watchedMovies.add("The Dark Knight");

console.log(watchedMovies);

// 보고싶은 영화 목록
// set을 생성하면서 목록을 초기화
const towatchMovies = new Set(['파이트 클럽','더 울프 오브 월스트리트','노인을 위한 나라는 없다']);

console.log(towatchMovies);

// 새로운 영화 시청
// 기존 목록에 영화가 있는지 확인하고, 없으면 추가
const iswatched = watchedMovies.has('파이트클럽');

if(!iswatched){
  watchedMovies.add('파이트클럽');
}
console.log('시청한 영화 목록: ', watchedMovies);

// 해당 영화가 보고싶은 영화 목록에 있다면, 삭제
const movieName = '파이트클럽';

if(towatchMovies.has('movieName')){
  towatchMovies.delete('movieName');
  console.log('${movieName}을 보고싶은 영화 목록에서 삭제 했습니다');

}

console.log('시청한 영화 목록: ', );
for(const movie of watchMovies){
  console.log(movie);
}

console.log('보고싶은 영화 목록: ', );
for(const movie of towatchMovies){
  console.log(movie);
}