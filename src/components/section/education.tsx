import { useTheme } from '../theme/theme-provider';

export const Education = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <section
      className={`py-20 px-6 border-t ${
        isDarkMode ? 'border-gray-800' : 'border-gray-200'
      }`}
    >
      <div className='max-w-5xl mx-auto'>
        <div className='mb-10 text-center'>
          <h2 className='font-heading text-3xl font-semibold'>Education</h2>
        </div>

        {/* Education */}
        <div
          className={`p-6 rounded-xl border mb-8 ${
            isDarkMode ? 'border-gray-800' : 'border-gray-200'
          }`}
        >
          <h4 className='text-xl font-semibold mb-2'>
            BSc in Software Engineering
          </h4>
          <p
            className={`font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Hanoi University of Science and Technology
          </p>
          <div className='flex items-center gap-4 mt-2'>
            <span
              className={`text-sm ${
                isDarkMode ? 'text-gray-500' : 'text-gray-500'
              }`}
            >
              Graduated September 2022
            </span>
            <span
              className={`text-sm ${
                isDarkMode ? 'text-gray-500' : 'text-gray-500'
              }`}
            >
              GPA: 3.43
            </span>
          </div>
        </div>

        {/* Certificates */}
        {/* <h4 className='text-2xl font-semibold mb-6'>Certifications</h4>
        <div className='grid md:grid-cols-2 gap-4'>
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl border ${
                isDarkMode
                  ? 'border-gray-800 hover:border-gray-700'
                  : 'border-gray-200 hover:border-gray-300'
              } transition-colors`}
            >
              <h5 className='font-semibold mb-1'>{cert.name}</h5>
              <p
                className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {cert.issuer}
              </p>
              <p
                className={`text-sm ${
                  isDarkMode ? 'text-gray-500' : 'text-gray-500'
                }`}
              >
                {cert.date}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};
