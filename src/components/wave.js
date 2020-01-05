import React, { useState } from 'react';
import { css } from '@emotion/core';

const Wave = () => {
    const [waves, setWaves] = useState(0);
    const label = `✌ ${waves} ${waves === 1 ? 'wave' : 'wave' : 'waves'
} `
};

export default Wave;
