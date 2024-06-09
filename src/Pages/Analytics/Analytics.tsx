import "./analytics.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Analytics: React.FC = () => {
  const clicks = useSelector((state: RootState) => state.counter.clicks);
  const titles = useSelector((state: RootState) => state.counter.titles);
  const clickData = Object.entries(clicks).map(([id, count], index) => ({
    id,
    title: titles[id],
    count,
    index: index + 1,
  }));

  return (
    <main className="main-table">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Card ID</th>
              <th rowSpan={4}>Card Title</th>
              <th>Number of Clicks</th>
            </tr>
          </thead>

          <tbody>
            {clickData.map((data) => (
              <tr key={data.id}>
                <td>{data.index}</td>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Analytics;
