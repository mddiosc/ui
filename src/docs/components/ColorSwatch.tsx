// Color values from panda.config.ts
const colors = {
  white: '#ffffff',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  yellow: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
  },
};

interface ColorSwatchProps {
  name: string;
  value: string;
}

export const ColorSwatch = ({ name, value }: ColorSwatchProps) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
      <div
        style={{
          width: '80px',
          height: '40px',
          backgroundColor: value,
          borderRadius: '4px',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: 'monospace', fontSize: '0.875rem', fontWeight: 500 }}>
          {name}
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#6b7280' }}>
          {value}
        </div>
      </div>
    </div>
  );
};

interface ColorScaleProps {
  colorName: keyof typeof colors;
  shades: number[];
}

export const ColorScale = ({ colorName, shades }: ColorScaleProps) => {
  const colorScale = colors[colorName];
  
  if (typeof colorScale === 'string') {
    return null;
  }

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h4 style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 600 }}>
        {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
      </h4>
      {shades.map((shade) => {
        const value = colorScale[shade as keyof typeof colorScale];
        return (
          <ColorSwatch
            key={shade}
            name={`${colorName}.${shade}`}
            value={value}
          />
        );
      })}
    </div>
  );
};

interface SemanticColorProps {
  name: string;
  value: string;
}

export const SemanticColor = ({ name, value }: SemanticColorProps) => {
  return <ColorSwatch name={name} value={value} />;
};
