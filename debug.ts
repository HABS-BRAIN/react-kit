import { extractLinearStudySequence, MAIN_EMOTION } from './src'
import { StudyFullInfo } from './src/shared-types/study'
import { writeFileSync } from 'node:fs'

const study: StudyFullInfo = {
  _id: '69aad5479bdd34bfb7f78c34',
  title: '[DEV] - Emotinder randomization ',
  templateId: '69aacef69bdd34bfb7f78bc3',
  participantId: 'f90480fa-1db2-4a52-89d1-1062d29e7135',
  sequence: [
    {
      templateId: '69271e06b8173da35c8957fc',
      type: 'protocol',
      protocol: {
        _id: 'generated_by_template-EMOTINDER-69271e06b8173da35c8957fc',
        title: '[DEV] - Emotinder',
        description: 'Automatized from questionnaire',
        templateId: '69271e06b8173da35c8957fc',
        estimatedDuration: {
          total: 409,
          videos: 409,
          audios: 0,
          autoplay: 0,
        },
        steps: [
          {
            content: {
              type: 'video',
              video: {
                _id: '692714bbb8173da35c8954b6',
                filename: '1764168889840-626ca05e-e086-4a05-a5d5-c5574a6bc60c.mp4',
                originalName: 'araignee_1.mp4',
                size: 9720976,
                mimetype: 'video/mp4',
                duration: 20,
                category: 'SPIDER',
                hash: '11b80b1c159fc5100a6c67b7d0b21a739f08b2c3e452899dc463411c73d957d7',
                createdAt: '2025-11-26T14:54:51.092Z',
                updatedAt: '2026-03-03T16:01:46.171Z',
                __v: 0,
                r2Key: 'videos/1764168889840-626ca05e-e086-4a05-a5d5-c5574a6bc60c.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764168889840-626ca05e-e086-4a05-a5d5-c5574a6bc60c.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'FEAR',
              category: 'SPIDER',
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '692717a1b8173da35c89563c',
                filename: '1764169632525-b180e245-024f-4d35-b9fc-e8127e4eace7.mp4',
                originalName: 'insectes_3.mp4',
                size: 16877649,
                mimetype: 'video/mp4',
                duration: 22,
                category: 'INSECTS',
                hash: 'f81c24498a6a444bbec4a7ac924bea5a4201960d4c246dda81e4aa9bc53cb71b',
                createdAt: '2025-11-26T15:07:13.973Z',
                updatedAt: '2026-03-03T16:03:46.035Z',
                __v: 0,
                r2Key: 'videos/1764169632525-b180e245-024f-4d35-b9fc-e8127e4eace7.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764169632525-b180e245-024f-4d35-b9fc-e8127e4eace7.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'FEAR',
              category: 'INSECTS',
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '69271992b8173da35c895775',
                filename: '1764170128924-acd5b89f-bb2a-4e35-be4e-5d3300f11ad8.mp4',
                originalName: 'mysterieux_2.mp4',
                size: 10647273,
                mimetype: 'video/mp4',
                duration: 16,
                category: 'MYSTERIOUS',
                hash: 'f8449721e1d35ffa2e0e29bf794c8dbc5dfccd4b456252d10cb4b79d14f7f019',
                createdAt: '2025-11-26T15:15:30.124Z',
                updatedAt: '2026-03-03T16:05:32.224Z',
                __v: 0,
                r2Key: 'videos/1764170128924-acd5b89f-bb2a-4e35-be4e-5d3300f11ad8.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764170128924-acd5b89f-bb2a-4e35-be4e-5d3300f11ad8.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'SURPRISE',
              category: 'MYSTERIOUS',
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '69271784b8173da35c89561f',
                filename: '1764169603931-7dc19b8f-b632-46b2-a8b0-605755686691.mp4',
                originalName: 'serpent_2.mp4',
                size: 2457495,
                mimetype: 'video/mp4',
                duration: 11,
                category: 'SNAKE',
                hash: 'f88570e0a8eca6172abed8872e3a2336b23635157c4cc817d1a5b6d9d5159297',
                createdAt: '2025-11-26T15:06:44.669Z',
                updatedAt: '2026-03-03T16:03:33.720Z',
                __v: 0,
                r2Key: 'videos/1764169603931-7dc19b8f-b632-46b2-a8b0-605755686691.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764169603931-7dc19b8f-b632-46b2-a8b0-605755686691.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'SURPRISE',
              category: 'SNAKE',
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '692716cdb8173da35c89560c',
                filename: '1764169418523-dfc83b65-3ae7-45c5-b372-2422bb816b80.mp4',
                originalName: 'concerts_1.mp4',
                size: 61327668,
                mimetype: 'video/mp4',
                duration: 47,
                category: 'CONCERTS',
                hash: 'd25823d6af7bdbe11c5cff8e6a9a3d35aa1c9c6566b8dfaa92d8f1ab59ae532f',
                createdAt: '2025-11-26T15:03:41.017Z',
                updatedAt: '2026-03-03T16:03:32.857Z',
                __v: 0,
                r2Key: 'videos/1764169418523-dfc83b65-3ae7-45c5-b372-2422bb816b80.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764169418523-dfc83b65-3ae7-45c5-b372-2422bb816b80.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'EXCITEMENT',
              category: 'CONCERTS',
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '692716cab8173da35c895606',
                filename: '1764169416896-83643aa2-8d23-44f3-8e51-45eae7e877b0.mp4',
                originalName: 'concerts_2.mp4',
                size: 15352050,
                mimetype: 'video/mp4',
                duration: 18,
                category: 'CONCERTS',
                hash: '3dba470e9713c7b6b8cd73da3c2a5334941e82f516b1dd99090ae0af057b0449',
                createdAt: '2025-11-26T15:03:38.001Z',
                updatedAt: '2026-03-03T16:03:18.480Z',
                __v: 0,
                r2Key: 'videos/1764169416896-83643aa2-8d23-44f3-8e51-45eae7e877b0.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764169416896-83643aa2-8d23-44f3-8e51-45eae7e877b0.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'EXCITEMENT',
              category: 'CONCERTS',
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '69271830b8173da35c895667',
                filename: '1764169775636-84db9670-80fc-4691-b7d9-b9ea11ef86dd.mp4',
                originalName: 'souffranceanimale_3.mp4',
                size: 7880914,
                mimetype: 'video/mp4',
                duration: 9,
                category: 'ANIMAL_SUFFERING',
                hash: '525169d92d5c1a0a8622da73ff2baeeeb616ce81a9268a1b765d6ee164da095c',
                createdAt: '2025-11-26T15:09:36.285Z',
                updatedAt: '2026-03-03T16:03:51.183Z',
                __v: 0,
                r2Key: 'videos/1764169775636-84db9670-80fc-4691-b7d9-b9ea11ef86dd.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764169775636-84db9670-80fc-4691-b7d9-b9ea11ef86dd.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'DISGUST',
              category: 'ANIMAL_SUFFERING',
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '69271586b8173da35c895545',
                filename: '1764169093249-973616e6-c6df-491b-9444-b787b8be7fef.mp4',
                originalName: 'bullying_2.mp4',
                size: 7449420,
                mimetype: 'video/mp4',
                duration: 9,
                category: 'BULLYING',
                hash: 'e10c15544b020de8e3696d4cef2faf85e02bc8b3aad901ba7d2c0322973d108f',
                createdAt: '2025-11-26T14:58:14.068Z',
                updatedAt: '2026-03-03T16:02:27.913Z',
                __v: 0,
                r2Key: 'videos/1764169093249-973616e6-c6df-491b-9444-b787b8be7fef.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764169093249-973616e6-c6df-491b-9444-b787b8be7fef.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'DISGUST',
              category: 'BULLYING',
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '69271795b8173da35c89562e',
                filename: '1764169620002-62f18a05-c4a4-413e-8dd5-9ff42d40719a.mp4',
                originalName: 'cosy_2.mp4',
                size: 3890607,
                mimetype: 'video/mp4',
                duration: 14,
                category: 'COZY',
                hash: 'b0c1f6be0264902593e1fc94a7c99f4c74f036a6fb44b83573db1c962f02e4fe',
                createdAt: '2025-11-26T15:07:01.153Z',
                updatedAt: '2026-03-03T16:03:39.985Z',
                __v: 0,
                r2Key: 'videos/1764169620002-62f18a05-c4a4-413e-8dd5-9ff42d40719a.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764169620002-62f18a05-c4a4-413e-8dd5-9ff42d40719a.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'RELAXATION',
              category: 'COZY',
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '69271860b8173da35c895691',
                filename: '1764169822738-cfee96da-2514-4d30-81fc-f901673feec1.mp4',
                originalName: 'spa_2.mp4',
                size: 12729583,
                mimetype: 'video/mp4',
                duration: 18,
                category: 'SPA',
                hash: 'ee467d73a44211944f08b95eec871f2b12dd6d41d952c45240103b967161f80f',
                createdAt: '2025-11-26T15:10:24.023Z',
                updatedAt: '2026-03-03T16:04:13.728Z',
                __v: 0,
                r2Key: 'videos/1764169822738-cfee96da-2514-4d30-81fc-f901673feec1.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764169822738-cfee96da-2514-4d30-81fc-f901673feec1.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'RELAXATION',
              category: 'SPA',
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '69271a5eb8173da35c8957c5',
                filename: '1764170333365-a123d2d5-5f0c-4d80-b4e3-7dbd2878d246.mp4',
                originalName: 'eating_3.mp4',
                size: 15566863,
                mimetype: 'video/mp4',
                duration: 21,
                category: 'EATING',
                hash: 'b19f48dc648264d1aba34af26617f442c28b4b0c35bab2ad6c69ab649b63f155',
                createdAt: '2025-11-26T15:18:54.842Z',
                updatedAt: '2026-03-03T16:05:52.142Z',
                __v: 0,
                r2Key: 'videos/1764170333365-a123d2d5-5f0c-4d80-b4e3-7dbd2878d246.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764170333365-a123d2d5-5f0c-4d80-b4e3-7dbd2878d246.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'GUILT',
              category: 'EATING',
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '69271a21b8173da35c895793',
                filename: '1764170272123-4661336e-9dc4-48de-8bbf-a552c84514f7.mp4',
                originalName: 'viellesse_3.mp4',
                size: 8368309,
                mimetype: 'video/mp4',
                duration: 15,
                category: 'OLD_AGE',
                hash: '07f97ea1784d42ea2ca466b1750f38092bcedaecb363c422991b633614cd2220',
                createdAt: '2025-11-26T15:17:53.143Z',
                updatedAt: '2026-03-03T16:05:39.053Z',
                __v: 0,
                r2Key: 'videos/1764170272123-4661336e-9dc4-48de-8bbf-a552c84514f7.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764170272123-4661336e-9dc4-48de-8bbf-a552c84514f7.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'GUILT',
              category: 'OLD_AGE',
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '69271592b8173da35c895555',
                filename: '1764169105027-377a9f7b-fed6-450d-b180-8677e2f8f074.mp4',
                originalName: 'flirthomme_3.mp4',
                size: 7358319,
                mimetype: 'video/mp4',
                duration: 15,
                category: 'MALE_FLIRTING',
                hash: '521f1b2def933625b26f926f273f10e15bc8e78f5dcef51723f787cda4dd60bb',
                createdAt: '2025-11-26T14:58:26.634Z',
                updatedAt: '2026-03-03T16:02:38.246Z',
                __v: 0,
                r2Key: 'videos/1764169105027-377a9f7b-fed6-450d-b180-8677e2f8f074.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764169105027-377a9f7b-fed6-450d-b180-8677e2f8f074.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'SENSUALITY',
              category: 'MALE_FLIRTING',
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '69271592b8173da35c895553',
                filename: '1764169105116-9fd9e86a-0e0f-4c21-ad5e-d4d77bff2144.mp4',
                originalName: 'flirthomme_2.mp4',
                size: 10983560,
                mimetype: 'video/mp4',
                duration: 20,
                category: 'MALE_FLIRTING',
                hash: 'd2388667a32081cd8022447e50a185340dc5633e05817c921fefafe508c6dcd3',
                createdAt: '2025-11-26T14:58:26.592Z',
                updatedAt: '2026-03-03T16:02:36.530Z',
                __v: 0,
                r2Key: 'videos/1764169105116-9fd9e86a-0e0f-4c21-ad5e-d4d77bff2144.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764169105116-9fd9e86a-0e0f-4c21-ad5e-d4d77bff2144.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'SENSUALITY',
              category: 'MALE_FLIRTING',
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '692718e4b8173da35c8956f3',
                filename: '1764169955184-24a683da-9d90-4bb1-9c06-ab05c9eac221.mp4',
                originalName: 'table_1.mp4',
                size: 3889520,
                mimetype: 'video/mp4',
                duration: 12,
                category: 'TABLE',
                hash: 'b9e8098f8a575b6dcab060f37040b9f5675b2417c2fe4ff4d3b67754db80a3e9',
                createdAt: '2025-11-26T15:12:36.094Z',
                updatedAt: '2026-03-03T16:04:58.823Z',
                __v: 0,
                r2Key: 'videos/1764169955184-24a683da-9d90-4bb1-9c06-ab05c9eac221.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764169955184-24a683da-9d90-4bb1-9c06-ab05c9eac221.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'NEUTRAL',
              category: 'TABLE',
              fallbackCategoriesUsed: true,
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '69271604b8173da35c89559e',
                filename: '1764169219458-42cd5975-1aae-43b2-a1b4-1b21531d5ec7.mp4',
                originalName: 'chaise_3.mp4',
                size: 9126865,
                mimetype: 'video/mp4',
                duration: 16,
                category: 'CHAIR',
                hash: 'ffe952ffd6432844df9f283f1deaf083f7cedcd7945a42f1400052f02717ca23',
                createdAt: '2025-11-26T15:00:20.869Z',
                updatedAt: '2026-03-03T16:02:59.980Z',
                __v: 0,
                r2Key: 'videos/1764169219458-42cd5975-1aae-43b2-a1b4-1b21531d5ec7.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764169219458-42cd5975-1aae-43b2-a1b4-1b21531d5ec7.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'NEUTRAL',
              category: 'CHAIR',
              fallbackCategoriesUsed: true,
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '692718c2b8173da35c8956df',
                filename: '1764169921095-61eb151e-a749-4581-8047-000d5e880762.mp4',
                originalName: 'decorationfete_2.mp4',
                size: 18311390,
                mimetype: 'video/mp4',
                duration: 22,
                category: 'PARTY_DECORATION',
                hash: '7e66b8bc156950ea3a6a5cf0b9db8e887e9ab49e671e3c8b23a7ca672fa7db39',
                createdAt: '2025-11-26T15:12:02.749Z',
                updatedAt: '2026-03-03T16:04:57.387Z',
                __v: 0,
                r2Key: 'videos/1764169921095-61eb151e-a749-4581-8047-000d5e880762.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764169921095-61eb151e-a749-4581-8047-000d5e880762.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'JOY',
              category: 'PARTY_DECORATION',
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '692717bbb8173da35c895650',
                filename: '1764169658299-1ca09ea7-20cb-451d-9074-38d9fa79572d.mp4',
                originalName: 'couple_2.mp4',
                size: 5568582,
                mimetype: 'video/mp4',
                duration: 9,
                category: 'COUPLE',
                hash: '1f1f19c55dfe0d7b30edac7f28efa560c7ddd344b8e5c107f42408f6b649dd4e',
                createdAt: '2025-11-26T15:07:39.024Z',
                updatedAt: '2026-03-03T16:03:47.517Z',
                __v: 0,
                r2Key: 'videos/1764169658299-1ca09ea7-20cb-451d-9074-38d9fa79572d.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764169658299-1ca09ea7-20cb-451d-9074-38d9fa79572d.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'JOY',
              category: 'COUPLE',
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '6927195fb8173da35c89574b',
                filename: '1764170078393-fbb35b01-31d8-4f65-8395-aeda5c7d534b.mp4',
                originalName: 'desastre_1.mp4',
                size: 28088573,
                mimetype: 'video/mp4',
                duration: 11,
                category: 'DISASTER',
                hash: '0825d7136d71ca9dc71c02c533835146d748c1df34dc92de859533ee6d3753c7',
                createdAt: '2025-11-26T15:14:39.088Z',
                updatedAt: '2026-03-03T16:05:24.137Z',
                __v: 0,
                r2Key: 'videos/1764170078393-fbb35b01-31d8-4f65-8395-aeda5c7d534b.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764170078393-fbb35b01-31d8-4f65-8395-aeda5c7d534b.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'SADNESS',
              category: 'DISASTER',
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '692714cab8173da35c8954be',
                filename: '1764168905272-a7b1f826-3dc7-4d5d-8a19-bb57ddf8aad1.mp4',
                originalName: 'exploitation_2.mp4',
                size: 11047060,
                mimetype: 'video/mp4',
                duration: 16,
                category: 'EXPLOITATION',
                hash: 'fd99d8b21d73b6d220d6af7cc7614b0b263382f4a4b3a2947f63f853b80c12ff',
                createdAt: '2025-11-26T14:55:06.438Z',
                updatedAt: '2026-03-03T16:01:42.612Z',
                __v: 0,
                r2Key: 'videos/1764168905272-a7b1f826-3dc7-4d5d-8a19-bb57ddf8aad1.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764168905272-a7b1f826-3dc7-4d5d-8a19-bb57ddf8aad1.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'SADNESS',
              category: 'EXPLOITATION',
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '69271627b8173da35c8955b4',
                filename: '1764169253861-2243fc96-448c-4d8c-8e07-63a58faccaf0.mp4',
                originalName: 'policebrutality_2.mp4',
                size: 4515320,
                mimetype: 'video/mp4',
                duration: 20,
                category: 'POLICE_BRUTALITY',
                hash: 'ad4b862b5277b97f3f9573354d5f08fc0b11a7f3cd7ed2143bd6499779a9c08f',
                createdAt: '2025-11-26T15:00:55.208Z',
                updatedAt: '2026-03-03T16:03:02.344Z',
                __v: 0,
                r2Key: 'videos/1764169253861-2243fc96-448c-4d8c-8e07-63a58faccaf0.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764169253861-2243fc96-448c-4d8c-8e07-63a58faccaf0.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'ANGER',
              category: 'POLICE_BRUTALITY',
              fallbackCategoriesUsed: true,
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '692715c7b8173da35c895575',
                filename: '1764169158046-71b648d9-af2b-4fdc-9d9a-ca977d69eca5.mp4',
                originalName: 'guerre_1.mp4',
                size: 13887983,
                mimetype: 'video/mp4',
                duration: 22,
                category: 'WAR',
                hash: '26368784b404b0cddaa8333a04654b9709b4ee7c92b3d480a8768799c8af1139',
                createdAt: '2025-11-26T14:59:19.700Z',
                updatedAt: '2026-03-03T16:02:45.239Z',
                __v: 0,
                r2Key: 'videos/1764169158046-71b648d9-af2b-4fdc-9d9a-ca977d69eca5.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764169158046-71b648d9-af2b-4fdc-9d9a-ca977d69eca5.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'ANGER',
              category: 'WAR',
              fallbackCategoriesUsed: true,
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '692714fab8173da35c8954dc',
                filename: '1764168953168-1ead5221-a679-461a-91a4-1bd5f213a7d7.mp4',
                originalName: 'art_2.mp4',
                size: 10730291,
                mimetype: 'video/mp4',
                duration: 13,
                category: 'ART',
                hash: 'cf2000abaed43b481d96a3c124ae5cc3db4ea5020547a1af48d00bc9f3c13f2d',
                createdAt: '2025-11-26T14:55:54.159Z',
                updatedAt: '2026-03-03T16:01:59.828Z',
                __v: 0,
                r2Key: 'videos/1764168953168-1ead5221-a679-461a-91a4-1bd5f213a7d7.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764168953168-1ead5221-a679-461a-91a4-1bd5f213a7d7.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'CURIOSITY',
              category: 'ART',
            },
          },
          {
            content: {
              type: 'video',
              video: {
                _id: '69271a43b8173da35c8957ad',
                filename: '1764170306732-288be090-6f66-45f8-b765-2e8bc7525815.mp4',
                originalName: 'objetsatypiques_1.mp4',
                size: 13380008,
                mimetype: 'video/mp4',
                duration: 13,
                category: 'UNUSUAL_OBJECTS',
                hash: 'bed09acc1eaf4a82afe3dcfaa4e82d54b047ee2f607ec7a25408db33cbcdefae',
                createdAt: '2025-11-26T15:18:27.652Z',
                updatedAt: '2026-03-03T16:05:48.703Z',
                __v: 0,
                r2Key: 'videos/1764170306732-288be090-6f66-45f8-b765-2e8bc7525815.mp4',
                url: 'https://assets.internal.habs.ai/videos/1764170306732-288be090-6f66-45f8-b765-2e8bc7525815.mp4',
              },
              maxDuration: 10,
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction:
                    'Comment cette vidéo vous a-t-elle affecté ?\nRenseignez les DEUX curseurs pour faire apparaître le bouton VALIDER',
                  sliders: [
                    {
                      instruction:
                        'Positivité émotionnelle (1 = très négatif, 7 = très positif)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Très Négatif',
                        '5': '',
                        '9': 'Très Positif',
                      },
                    },
                    {
                      instruction:
                        'Intensité émotionnelle ( (1 = calme, 9 = excité / intense)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Calme',
                        '5': '',
                        '9': 'Excité / Intense',
                      },
                    },
                    {
                      instruction: 'Confiance ( (1 = pas en contrôle, 9 = en contrôle)',
                      min: 1,
                      max: 9,
                      defaultValue: 5,
                      step: 0.01,
                      marks: {
                        '1': 'Pas confiant',
                        '5': '',
                        '9': 'Confiant',
                      },
                    },
                  ],
                },
                {
                  type: 'checkbox',
                },
              ],
            },
            meta: {
              lslMarkerKey: 'CURIOSITY',
              category: 'UNUSUAL_OBJECTS',
            },
          },
        ],
      },
      runNextBlockAfterEachStep: 1,
      mixSteps: false,
    },
  ],
  belongsToOrganization: ['3038e9c7-3dcc-4d95-ae7b-cbe70da83578'],
  createdAt: '2026-03-06T13:23:19.168Z',
  updatedAt: '2026-03-06T13:23:19.168Z',
  __v: 0,
    

}

const linear = extractLinearStudySequence(study)
writeFileSync('debug-output.json', JSON.stringify(linear, null, 2), 'utf-8')
console.log('Output saved to debug-output.json')
