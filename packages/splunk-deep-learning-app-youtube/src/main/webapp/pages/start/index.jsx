import React from 'react';

import layout from '@splunk/react-page';
import FileUploader from '@splunk/file-uploader';
import { getUserTheme } from '@splunk/splunk-utils/themes';

import { StyledContainer, StyledGreeting } from './StartStyles';

getUserTheme()
    .then((theme) => {
        layout(
            <StyledContainer>
                <StyledGreeting>Hello, from inside SplunkDeepLearningAppYoutube!</StyledGreeting>
                <div>Your component will appear below.</div>
                <FileUploader name="from inside FileUploader" />
            </StyledContainer>,
            {
                theme,
            }
        );
    })
    .catch((e) => {
        const errorEl = document.createElement('span');
        errorEl.innerHTML = e;
        document.body.appendChild(errorEl);
    });
