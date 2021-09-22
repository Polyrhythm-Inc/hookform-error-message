import React from 'react';
import { render } from '@testing-library/react';
import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<ErrorMessage name="test" errors={{}} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with flat errors', () => {
    const { asFragment } = render(
      <ErrorMessage
        errors={{ flat: { type: 'flat', message: 'flat' } }}
        name="flat"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with flat errors and as with string', () => {
    const { asFragment } = render(
      <ErrorMessage
        as={'span' as const}
        errors={{ flat: { type: 'flat', message: 'flat' } }}
        name="flat"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with flat errors and as with string and className', () => {
    const { asFragment } = render(
      <ErrorMessage
        as={'span' as const}
        errors={{ flat: { type: 'flat', message: 'flat' } }}
        name="flat"
        className="test"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with flat errors and as with element and render', () => {
    const { asFragment } = render(
      <ErrorMessage
        as={<span />}
        errors={{ flat: { type: 'flat', message: 'flat' } }}
        name="flat"
        render={({ message }) => message}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with flat errors and as with element and className and render', () => {
    const { asFragment } = render(
      <ErrorMessage
        as={<span />}
        errors={{ flat: { type: 'flat', message: 'flat' } }}
        name="flat"
        className="test"
        render={({ message }) => message}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with flat errors and as with component', () => {
    function CustErrComp({ children }: { children: React.ReactNode }) {
      return <div>{children}</div>;
    }
    const { asFragment } = render(
      <ErrorMessage
        as={CustErrComp}
        errors={{ flat: { type: 'flat', message: 'flat' } }}
        name="flat"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with flat errors and as with component and render', () => {
    function CustErrComp({ children }: { children: React.ReactNode }) {
      return <div>{children}</div>;
    }
    const { asFragment } = render(
      <ErrorMessage
        as={CustErrComp}
        errors={{ flat: { type: 'flat', message: 'flat' } }}
        name="flat"
        render={({ message }) => message}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with flat multiple errors and render', () => {
    const { asFragment } = render(
      <ErrorMessage
        errors={{
          flat: {
            type: 'flat',
            message: 'flat',
            types: {
              flat1: 'flat1',
              flat2: 'flat2',
              flat3: 'flat3',
            },
          },
        }}
        name="flat"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <span key={type}>{message}</span>
          ))
        }
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with flat multiple errors and as with element and render', () => {
    const { asFragment } = render(
      <ErrorMessage
        as={<div />}
        errors={{
          flat: {
            type: 'flat',
            message: 'flat',
            types: {
              flat1: 'flat1',
              flat2: 'flat2',
              flat3: 'flat3',
            },
          },
        }}
        name="flat"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <span key={type}>{message}</span>
          ))
        }
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with nested errors object', () => {
    const { asFragment } = render(
      <ErrorMessage
        errors={{
          nested: {
            object: { type: 'object', message: 'object' },
          },
        }}
        name="nested.object"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with nested errors object and as with string', () => {
    const { asFragment } = render(
      <ErrorMessage
        as={'span' as const}
        errors={{
          nested: {
            object: { type: 'object', message: 'object' },
          },
        }}
        name="nested.object"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with nested errors and as with componet and render', () => {
    const { asFragment } = render(
      <ErrorMessage
        as={<span />}
        errors={{
          nested: {
            object: { type: 'object', message: 'object' },
          },
        }}
        name="nested.object"
        render={({ message }) => message}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with nested multiple errors and render', () => {
    const { asFragment } = render(
      <ErrorMessage
        errors={{
          nested: {
            object: {
              type: 'object',
              message: 'object',
              types: {
                object1: 'object1',
                object2: 'object2',
                object3: 'object3',
              },
            },
          },
        }}
        name="nested.object"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <span key={type}>{message}</span>
          ))
        }
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with nested multiple errors and as with element and render', () => {
    const { asFragment } = render(
      <ErrorMessage
        as={<div />}
        errors={{
          nested: {
            object: {
              type: 'object',
              message: 'object',
              types: {
                object1: 'object1',
                object2: 'object2',
                object3: 'object3',
              },
            },
          },
        }}
        name="nested.object"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <span key={type}>{message}</span>
          ))
        }
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with nested errors array', () => {
    const { asFragment } = render(
      <ErrorMessage
        errors={{
          nested: [
            {
              array: { type: 'array', message: 'array' },
            },
          ],
        }}
        name="nested[0].array"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with nested errors array and as with string', () => {
    const { asFragment } = render(
      <ErrorMessage
        as={'span' as const}
        errors={{
          nested: [
            {
              array: { type: 'array', message: 'array' },
            },
          ],
        }}
        name="nested[0].array"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with nested errors array and as with element and render', () => {
    const { asFragment } = render(
      <ErrorMessage
        as={<span />}
        errors={{
          nested: [
            {
              array: { type: 'array', message: 'array' },
            },
          ],
        }}
        name="nested[0].array"
        render={({ message }) => message}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with nested multiple errors array and render', () => {
    const { asFragment } = render(
      <ErrorMessage
        errors={{
          nested: [
            {
              array: {
                type: 'array',
                message: 'array',
                types: {
                  array1: 'array1',
                  array2: 'array2',
                  array3: 'array3',
                },
              },
            },
          ],
        }}
        name="nested[0].array"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <span key={type}>{message}</span>
          ))
        }
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with nested multiple errors array and as with element and render', () => {
    const { asFragment } = render(
      <ErrorMessage
        as={<div />}
        errors={{
          nested: [
            {
              array: {
                type: 'array',
                message: 'array',
                types: {
                  array1: 'array1',
                  array2: 'array2',
                  array3: 'array3',
                },
              },
            },
          ],
        }}
        name="nested[0].array"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <span key={type}>{message}</span>
          ))
        }
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render errors message when errors message is supplied', () => {
    const { asFragment } = render(
      <ErrorMessage
        errors={{ test: { type: 'test', message: 'test1' } }}
        name="test"
        message="test2"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with message that is string', () => {
    const { asFragment } = render(
      <ErrorMessage
        errors={{ test: { type: 'test' } }}
        name="test"
        message="test"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
