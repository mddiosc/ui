// Token values from panda.config.ts
const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
};

const spacing = {
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
};

const shadows = {
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
};

interface TypographySpecimenProps {
  size: keyof typeof fontSizes;
  label: string;
}

export const TypographySpecimen = ({ size, label }: TypographySpecimenProps) => {
  const fontSize = fontSizes[size];
  
  return (
    <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
        <span style={{ fontFamily: 'monospace', fontSize: '0.875rem', color: '#6b7280' }}>
          {label}
        </span>
        <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#9ca3af' }}>
          {fontSize}
        </span>
      </div>
      <div style={{ fontSize }}>
        The quick brown fox jumps over the lazy dog
      </div>
    </div>
  );
};

interface SpacingBoxProps {
  size: keyof typeof spacing;
  label: string;
}

export const SpacingBox = ({ size, label }: SpacingBoxProps) => {
  const spacingValue = spacing[size];
  
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div
          style={{
            width: spacingValue,
            height: spacingValue,
            backgroundColor: '#3b82f6',
            borderRadius: '4px',
            minWidth: '8px',
            minHeight: '8px',
          }}
        />
        <div>
          <div style={{ fontFamily: 'monospace', fontSize: '0.875rem', fontWeight: 500 }}>
            {label}
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#6b7280' }}>
            {spacingValue}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ShadowBoxProps {
  shadow: keyof typeof shadows;
  label: string;
}

export const ShadowBox = ({ shadow, label }: ShadowBoxProps) => {
  const shadowValue = shadows[shadow];
  
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{ fontFamily: 'monospace', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 500 }}>
        {label}
      </div>
      <div
        style={{
          width: '200px',
          height: '80px',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: shadowValue,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace',
          fontSize: '0.75rem',
          color: '#6b7280',
        }}
      >
        {shadow}
      </div>
    </div>
  );
};
