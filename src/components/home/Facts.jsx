import { useCountUp } from '../../hooks/useAnimations';

function Facts() {
  const facts = [
    { number: 99, text: 'Satisfied clients with successful IT implementations' },
    { number: 25, text: 'Years of combined IT expertise and experience' },
    { number: 120, text: 'Enterprise projects delivered on time' },
    { number: 5, text: 'Star rating from our technology partners' }
  ];

  const CountUpNumber = ({ value }) => {
    const ref = useCountUp(value);
    return <h1 ref={ref} className="text-5xl md:text-6xl font-bold text-primary">0</h1>;
  };

  return (
    <div className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <div key={index} className="flex items-start space-x-4">
              <CountUpNumber value={fact.number} />
              <h5 className="text-white text-lg mt-2">{fact.text}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Facts;
