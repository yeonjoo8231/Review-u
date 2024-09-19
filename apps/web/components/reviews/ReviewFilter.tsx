export default function ReviewFilter() {
  return (
    <div className="flex justify-between">
      <div>
        <input
          type="checkbox"
          id="showMyReviews"
          name="showMyReviews"
          value="true"
        />
        <label className="pl-2" htmlFor="showMyReviews">
          내 리뷰만 보기
        </label>
      </div>
      <div>
        <select>
          <option>전체</option>
          <option>카테고리1</option>
          <option>카테고리2</option>
          <option>카테고리3</option>
        </select>
      </div>
    </div>
  );
}
