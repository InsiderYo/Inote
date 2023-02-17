import React, { FC, useState } from 'react';

const TodoFilter: FC = () => {
  const [value, setValue] = useState<string>('');
  const [type, setType] = useState<'byDate' | 'byTitle'>('byTitle');

  return <div>TodoFilter</div>;
};

export default TodoFilter;
