import { useEffect, useRef } from 'react';
import { createApp } from 'vue'
import PropTypes from 'prop-types';

function RemoteVueComponent({ importComponent }) {
  const containerRef = useRef(null);

  useEffect(() => {
    async function loadVueComponent() {
      const { default: LocalCounter } = await importComponent();

      if (containerRef.current) {
        const app = createApp(LocalCounter);
        app.mount(containerRef.current);
      }
    }

    loadVueComponent();
  }, [importComponent]);

  return <div ref={containerRef} ></div>;
}

RemoteVueComponent.propTypes = {
  importComponent: PropTypes.func.isRequired,
};


export default RemoteVueComponent;
