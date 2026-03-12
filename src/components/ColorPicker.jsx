import { useState, useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';

export default function ColorPicker() {
  const [color, setColor] = useState('#00d9ff');

  // obtain translation function from context
  const { t } = useContext(LanguageContext);

  const presetColors = [
    '#00d9ff', // Cyan
    '#ff006e', // Pink
    '#8338ec', // Purple
    '#ffbe0b', // Yellow
    '#fb5607', // Orange
    '#00f5ff', // Light Cyan
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-12 h-full w-full px-4">
      {/* LED Preview */}
      <div className="flex gap-2 md:gap-8 flex-wrap justify-center">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-8 h-8 md:w-12 md:h-12 rounded-full shadow-lg transition-all duration-300"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 20px ${color}, inset 0 0 10px ${color}`,
            }}
          />
        ))}
      </div>

      {/* Native Color Picker */}
      <div className="flex flex-col items-center gap-3">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-16 h-16 md:w-24 md:h-24 rounded-lg cursor-pointer border-2 border-cyan-500/30"
        />
        <p className="text-gray-300 font-mono text-sm md:text-lg">{color.toUpperCase()}</p>
      </div>

      {/* Preset Colors */}
      <div className="flex gap-2 md:gap-3 flex-wrap justify-center">
        {presetColors.map((presetColor) => (
          <button
            key={presetColor}
            onClick={() => setColor(presetColor)}
            className={`w-8 h-8 md:w-12 md:h-12 rounded-lg transition-all transform hover:scale-110 ${
              color === presetColor ? 'ring-2 ring-white' : ''
            }`}
            style={{
              backgroundColor: presetColor,
              boxShadow: `0 0 10px ${presetColor}`,
            }}
          />
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-400 text-center text-xs md:text-sm max-w-xs">
        {t.picker.description}
      </p>
    </div>
  );
}
