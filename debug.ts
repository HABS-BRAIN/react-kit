import { extractLinearStudySequence, MAIN_EMOTION } from './src'
import { StudyFullInfo } from './src/shared-types/study'
import { writeFileSync } from 'node:fs'

const study: StudyFullInfo = {
    _id: '69c115c370ed67fc0dd591c3',
    title: 'Dev (interleaving)',
    templateId: '69c1056fb7fa3b4c17a159fd',
    participantId: '1c24cae8-e7bc-4a40-88e3-451c91bd7167',
    sequence: [
        {
            templateId: '69a8150e07d5a4bf77170993',
            type: 'protocol',
            protocol: {
                _id: 'generated_by_template-DEFAULT-69a8150e07d5a4bf77170993',
                title: '[DEMO] - Buffering step',
                description: '',
                estimatedDuration: {
                    total: 15,
                    videos: 0,
                    audios: 0,
                    autoplay: 15,
                },
                steps: [
                    {
                        content: {
                            type: 'text',
                            text: 'Relax for next 10 seconds in:',
                        },
                        goNext: {
                            type: 'autoplay',
                            duration: 5,
                            isCountdownPresented: true,
                        },
                    },
                    {
                        content: {
                            type: 'text',
                            text: ' (Beep at start and at end)',
                        },
                        goNext: {
                            type: 'autoplay',
                            duration: 10,
                            notifyStepStarts: true,
                            notifyStepEnds: true,
                            isCountdownPresented: false,
                        },
                    },
                ],
            },
        },
        {
            templateId: '69a814ab07d5a4bf7717098f',
            type: 'protocol',
            protocol: {
                _id: 'generated_by_template-DEFAULT-69a814ab07d5a4bf7717098f',
                title: '[DEMO] - Image, Audio, Video',
                description: 'Testing R2',
                estimatedDuration: {
                    total: 19,
                    videos: 10,
                    audios: 9,
                    autoplay: 0,
                },
                steps: [
                    {
                        content: {
                            type: 'image',
                            image: {
                                _id: '69a85884c7d56df8260507fe',
                                filename: 'Image 16-06-2025 at 11.34 2.JPG',
                                originalName: 'Image 16-06-2025 at 11.34 2.JPG',
                                url: 'https://staging.assets.internal.habs.ai/images/Image 16-06-2025 at 11.34 2.JPG',
                                size: 0,
                                mimetype: '',
                                hash: '',
                                r2Key: '',
                                createdAt: '',
                                updatedAt: '',
                                __v: 0
                            },
                        },
                        goNext: {
                            type: 'userInteraction',
                            userInteraction: [
                                {
                                    type: 'sliders',
                                    sliders: [
                                        {
                                            instruction: 'Happy? ',
                                            defaultValue: 50,
                                            marks: {
                                                '0': 'No',
                                                '100': 'Yes',
                                            },
                                        },
                                    ],
                                },
                                {
                                    type: 'checkbox',
                                },
                            ],
                        },
                    },
                    {
                        content: {
                            type: 'audio',
                            audio: {
                                _id: '69a8588dc7d56df826050803',
                                filename: 'Speed Bike Start Rev Off - QuickSounds.com.mp3',
                                originalName: 'Speed Bike Start Rev Off - QuickSounds.com.mp3',
                                duration: 9,
                                url: 'https://staging.assets.internal.habs.ai/audio/Speed Bike Start Rev Off - QuickSounds.com.mp3',
                                size: 0,
                                mimetype: '',
                                hash: '',
                                r2Key: '',
                                createdAt: '',
                                updatedAt: '',
                                __v: 0
                            },
                        },
                        goNext: {
                            type: 'userInteraction',
                            userInteraction: [
                                {
                                    type: 'sliders',
                                    instruction: 'Angry?',
                                    sliders: [
                                        {
                                            marks: {
                                                '0': 'No',
                                                '100': 'Yes',
                                            },
                                        },
                                    ],
                                },
                                {
                                    type: 'checkbox',
                                },
                            ],
                        },
                    },
                    {
                        content: {
                            type: 'video',
                            video: {
                                _id: '69a85898c7d56df826050808',
                                filename: 'Solo.MOV',
                                originalName: 'Solo.MOV',
                                duration: 10,
                                url: 'https://staging.assets.internal.habs.ai/videos/Solo.MOV',
                                size: 0,
                                mimetype: '',
                                hash: '',
                                r2Key: '',
                                createdAt: '',
                                updatedAt: '',
                                __v: 0
                            },
                        },
                        goNext: {
                            type: 'userInteraction',
                            userInteraction: [
                                {
                                    type: 'sliders',
                                    instruction: 'Scared?',
                                    sliders: [
                                        {
                                            defaultValue: 50,
                                            marks: {
                                                '0': 'No',
                                                '100': 'Yes',
                                            },
                                        },
                                    ],
                                },
                                {
                                    type: 'checkbox',
                                },
                            ],
                        },
                    },
                ],
            },
            beforeBlocks: [
                {
                    type: 'protocol',
                    _id: 'generated_by_template-DEFAULT-69a8150e07d5a4bf77170993',
                },
            ],
            afterBlocks: [
                {
                    type: 'form',
                    _id: 'generated_by_template-69bc07204502db8af88e6291',
                },
                {
                    type: 'form',
                    _id: 'generated_by_template-69a8168f07d5a4bf771709a3',
                    mixSteps: true,
                },
            ],
            mixSteps: false,
        },
        {
            type: 'form',
            templateId: '69bc07204502db8af88e6291',
            form: {
                _id: 'generated_by_template-69bc07204502db8af88e6291',
                title: 'Dev',
                fields: [
                    {
                        type: 'text',
                        label: 'something',
                    },
                ],
            },
        },
        {
            type: 'form',
            templateId: '69a8168f07d5a4bf771709a3',
            form: {
                _id: 'generated_by_template-69a8168f07d5a4bf771709a3',
                title: '[DEMO] - STAI',
                description: '',
                fields: [
                    {
                        type: 'slider',
                        label: 'Rate your pain level?',
                        config: {
                            min: 0,
                            max: 10,
                            step: 1,
                            defaultValue: 5,
                            marks: {
                                '0': 'Nothing pain',
                                '10': 'Everything pain',
                            },
                        },
                    },
                    {
                        type: 'radio',
                        label: 'Are you hungry?',
                        config: {
                            options: [
                                {
                                    value: 'yes',
                                    label: 'Oui',
                                },
                                {
                                    value: 'no',
                                    label: 'Non',
                                },
                            ],
                        },
                    },
                ],
            },
            mixSteps: true,
        },
    ],
    belongsToOrganization: [
        '3038e9c7-3dcc-4d95-ae7b-cbe70da83578',
        '6a206ab2-776e-4551-8117-6d75513cf89e',
    ],

    __v: 0,
    createdAt: '',
    updatedAt: ''
}

const linear = extractLinearStudySequence(study)
writeFileSync('debug-output.json', JSON.stringify(linear, null, 2), 'utf-8')
console.log('Output saved to debug-output.json')
