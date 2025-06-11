import { useSelector } from "react-redux";
import { StyleSheet, css } from "aphrodite";
import CourseListRow from "./CourseListRow/CourseListRow";
import WithLogging from "../../components/HOC/WithLogging";

const styles = StyleSheet.create({
  courses: {
    // style//
  },
  table: {
    // style//
  },
  thtd: {
    // style//
  },
});

function CourseList() {
  const courses = useSelector((state) => state.courses);

  return (
    <div className={css(styles.courses)}>
      <table id="CourseList" className={css(styles.table)}>
        <thead>
          <CourseListRow
            textFirstCell="Available courses"
            isHeader={true}
            style={styles.thtd}
          />
          <CourseListRow
            textFirstCell="Course name"
            textSecondCell="Credit"
            isHeader={true}
            style={styles.thtd}
          />
        </thead>
        <tbody>
          {courses.length > 0 ? (
            courses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
                style={styles.thtd}
              />
            ))
          ) : (
            <CourseListRow
              textFirstCell="No course available yet"
              style={styles.thtd}
            />
          )}
        </tbody>
      </table>
    </div>
  );
}

export default WithLogging(CourseList);
