import { FC } from 'react';
import CountUp from 'react-countup';
// -------- data -------- //
import { factList4 } from 'data/facts';

const Facts5: FC = () => {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container py-14 py-md-16">
        <div className="row mb-5">
        <div className="row mb-3">
          <div className="col-md-11 col-xl-10 col-xxl-8 mx-auto text-center">
            <h2 className="display-4 mb-4 px-lg-14">SANTA CRUZ METRÓPOLI EN CIFRAS</h2>
          </div>
        </div>
          <div className="col-xl-10 mx-auto">
            <div className="row align-items-center counter-wrapper gy-6 text-center">
              {factList4.map(({ value, prefix, suffix, title, subtitle, Icon, id }) => (
                <div className="col-md-3" key={id}>
                  <Icon className="icon-svg-lg text-primary mb-2" />
                  <p>{title}</p>
                  <h3 className="my-1 text-pink">
                    <CountUp    prefix={prefix} suffix={suffix} end={value} separator={'.'} />
                  </h3>
                  <p>{subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts5;
