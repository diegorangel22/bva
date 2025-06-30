'use client';
import React, { useEffect, useRef } from 'react';
import { FasterTimeToMarket } from '../webflow/FasterTimeToMarket';

export default function Calculator() {
  const containerRef = useRef();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const container = containerRef.current;
      if (!container) return;

      const form = container.querySelector('form, .wf-form-Test-Form');
      const newNewInput = container.querySelector('#new-new');
      const majorEditsInput = container.querySelector('#major-edits');
      const minorEditsInput = container.querySelector('#minor-edits');
      const calculateButton = container.querySelector('#calculate');
      const resultOutput = container.querySelector('#number');

      if (!newNewInput || !majorEditsInput || !minorEditsInput || !calculateButton || !resultOutput) {
        return;
      }

      if (form) {
        form.setAttribute('action', 'javascript:void(0)');
        form.setAttribute('method', 'get');
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          e.stopPropagation();
        });
      }

      calculateButton.addEventListener('click', (e) => {
        e.preventDefault();
        const newNew = parseFloat(newNewInput.value || 0);
        const major = parseFloat(majorEditsInput.value || 0);
        const minor = parseFloat(minorEditsInput.value || 0);
        const minorWeeks = minor / 7;
        const total = newNew + major + minorWeeks;
        const saved = (newNew * 0.94) + ((major + minorWeeks) * 0.80);
        const percent = total > 0 ? (saved / total) * 100 : 0;
        resultOutput.textContent = percent.toFixed(1);
      });

      clearInterval(intervalId);
    }, 100); // Retry until component renders

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="webflow-scope" ref={containerRef}>
      <FasterTimeToMarket /> {/* ✅ Webflow component rendered here */}
    </div>
  );
}
