import { AddRandomColor } from './layout/addRandomColor/addRandomColor';
// import { BenefitsOfReact } from './layout/benefitOfReact/benefitsOfReact';
import { CreateColor } from './layout/createColor/createColor';

export default function App() {
  return (
    <div>
      <h1 className="text-5xl bg-blue-300 text-white flex justify-center">
        HW 17
      </h1>
      {/* <BenefitsOfReact /> */}
      {/* <AddRandomColor /> */}
      <CreateColor />
    </div>
  );
}
