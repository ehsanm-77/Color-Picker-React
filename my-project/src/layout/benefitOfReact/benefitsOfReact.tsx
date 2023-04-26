export const BenefitsOfReact = () => {
  const benefitOptions = [
    {
      title: '1 => Component-Based Architecture:',
      description:
        'React follows a component-based architecture, allowing developers to break down the user interface into reusable and independent components. This promotes modularity, code reusability, and easier maintenance.',
    },
    {
      title: '2 => Virtual DOM:',
      description:
        'React utilizes a virtual DOM, which is an in-memory representation of the actual DOM. By leveraging a virtual DOM, React optimizes rendering performance by efficiently updating only the necessary parts of the user interface. This leads to better performance and a smoother user experience.',
    },
    {
      title: '3 => Declarative Syntax:',
      description:
        'React uses a declarative syntax, which means developers can describe how the UI should look based on the application"s state. This makes it easier to understand, read, and debug code compared to imperative approaches.',
    },
    {
      title: '4 => Cross-Platform Development:',
      description:
        'React allows developers to write code once and deploy it across multiple platforms. With frameworks like React Native, you can leverage your existing React knowledge to build mobile applications for iOS and Android. This cross-platform compatibility saves development time and effort.',
    },
    {
      title: '5 => Efficient Updates:',
      description:
        ' React"s efficient diffing algorithm compares the previous and current states of components to identify minimal changes. This enables React to update only the necessary parts of the user interface, resulting in improved performance and faster rendering.',
    },
    {
      title: '6 => Large Ecosystem and Community Support:',
      description:
        'React has a vast ecosystem of libraries, tools, and community support. This provides access to a wide range of resources, such as UI component libraries (e.g., Material-UI, Ant Design), state management solutions (e.g., Redux, MobX), and development tools (e.g., React DevTools). The vibrant community actively contributes to the growth and improvement of the React ecosystem.',
    },
    {
      title: '7 => Testability:',
      description:
        'React"s component-based architecture and modular design make it highly testable. You can write unit tests for individual components, ensuring their correctness and enabling easy integration testing.',
    },
    {
      title: '8 => Support from Facebook and Open Source Community:',
      description:
        'React is developed and maintained by Facebook, which ensures its continuous improvement and updates. Additionally, React has a thriving open-source community that actively contributes to its development, documentation, and bug fixes.',
    },
  ];
  return (
    <>
      <div className="p-10 flex flex-wrap justify-center gap-5">
        {benefitOptions.map((item) => {
          return (
            <div className="bg-sky-200 p-2 rounded-md w-80">
              <div className="bg-yellow-200 inline">{item.title}</div>
              <div className="mt-3">{item.description}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
