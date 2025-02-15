import type {
  BuiltInOperation,
  DiscoveryOperation,
  DiscoveryResultTypes,
  SomeKindOfAzureOperationDiscovery,
} from '../models/operationDiscoveryResults';

export const MockSearchOperationsBuiltIn: DiscoveryOperation<BuiltInOperation>[] = [
  {
    name: 'blobExists',
    id: 'blobExists',
    type: 'blobExists',
    properties: {
      api: {
        id: '/serviceProviders/AzureBlob',
        type: 'ServiceProvider',
        name: 'AzureBlob',
        displayName: 'Azure Blob',
        iconUri: 'https://connectoricons-prod.azureedge.net/releases/v1.0.1443/1.0.1443.2341/azureblob/icon.png',
        brandColor: '#804998',
        description: 'Connect to Azure Azure Blob Storage.',
      },
      summary: 'Checks if Blob exists in Azure Storage',
      description: 'Checks if Blob exists in Azure Storage',
      visibility: 'Important',
      operationType: 'ServiceProvider',
      brandColor: '#804998',
      iconUri: 'https://connectoricons-prod.azureedge.net/releases/v1.0.1443/1.0.1443.2341/azureblob/icon.png',
    },
  },
];

export const MockAzureOperation: DiscoveryOperation<SomeKindOfAzureOperationDiscovery>[] = [
  {
    properties: {
      summary: 'When a blob is added or modified (properties only) (V2)',
      description:
        'This operation triggers a flow when one or more blobs are added or modified in a container. This trigger will only fetch the file metadata. To get the file content, you can use the \\"Get file content\\" operation. The trigger does not fire if a file is added/updated in a subfolder. If it is required to trigger on subfolders, multiple triggers should be created.',
      visibility: 'important',
      trigger: 'batch',
      pageable: false,
      isChunkingSupported: false,
      annotation: { status: 'Production', family: 'OnUpdatedFiles', revision: 2 },
      api: {
        name: 'azureblob',
        displayName: 'Azure Blob Storage',
        description:
          'Microsoft Azure Storage provides a massively scalable, durable, and highly available storage for data on the cloud, and serves as the data storage solution for modern applications. Connect to Blob Storage to perform various operations such as create, update, get and delete on blobs in your Azure Storage account.',
        iconUri: 'https://connectoricons-prod.azureedge.net/releases/v1.0.1563/1.0.1563.2732/azureblob/icon.png',
        brandColor: '#804998',

        id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/azureblob',
        type: 'Microsoft.Web/locations/managedApis',
      },
      isWebhook: false,
      isNotification: false,
      externalDocs: { url: 'https://docs.microsoft.com/connectors/azureblob/#when-a-blob-is-added-or-modified-(properties-only)-(v2)' },
    },
    id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/azureblob/apiOperations/OnUpdatedFiles_V2',
    name: 'OnUpdatedFiles_V2',
    type: 'Microsoft.Web/locations/managedApis/apiOperations',
    location: 'centralus',
  },
  {
    properties: {
      summary: 'When a rule is fired',
      description: 'Create an action which triggers when a rule is fired in IoT Central.',
      trigger: 'single',
      pageable: false,
      isChunkingSupported: false,
      annotation: { status: 'Preview', family: 'Actions_Create', revision: 1 },
      api: {
        name: 'iotcentral',
        displayName: 'Azure IoT Central V2',
        description:
          'This is a legacy connector for Azure IoT Central V2 applications that will become deprecated in the future. You should use the Azure IoT Central V3 connector and applications instead. Azure IoT Central makes it easy to connect, monitor, and manage your IoT devices at scale. With the IoT Central V2 connector, you can trigger flows when a rule has fired and take action by creating new devices, updating existing devices, and deleting devices.',
        iconUri: 'https://connectoricons-prod.azureedge.net/releases/v1.0.1544/1.0.1544.2640/iotcentral/icon.png',
        brandColor: '#0065d9',

        id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/iotcentral',
        type: 'Microsoft.Web/locations/managedApis',
      },
      isWebhook: true,
      isNotification: false,
      externalDocs: { url: 'https://docs.microsoft.com/connectors/iotcentral/#when-a-rule-is-fired' },
    },
    id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/iotcentral/apiOperations/Actions_Create',
    name: 'Actions_Create',
    type: 'Microsoft.Web/locations/managedApis/apiOperations',
    location: 'centralus',
  },
  {
    properties: {
      summary: 'When a task is added',
      description: 'This operation triggers when a new task is created.',
      visibility: 'important',
      trigger: 'batch',
      triggerHint: 'To see it work, add a task in Outlook.',
      pageable: false,
      isChunkingSupported: false,
      annotation: { status: 'Production', family: 'Trigger_OnNewTask', revision: 1 },
      api: {
        name: 'outlooktasks',
        displayName: 'Outlook Tasks',
        description:
          'Outlook Tasks service lets you create, read, synchronize, update and delete your tasks that are secured by Azure Active Directory in Office 365 or a Microsoft account.',
        iconUri: 'https://connectoricons-prod.azureedge.net/releases/v1.0.1445/1.0.1445.2347/outlooktasks/icon.png',
        brandColor: '#0072c6',

        id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/outlooktasks',
        type: 'Microsoft.Web/locations/managedApis',
      },
      isWebhook: false,
      isNotification: false,
      externalDocs: { url: 'https://docs.microsoft.com/connectors/outlooktasks/#when-a-task-is-added' },
    },
    id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/outlooktasks/apiOperations/Trigger_OnNewTask',
    name: 'Trigger_OnNewTask',
    type: 'Microsoft.Web/locations/managedApis/apiOperations',
    location: 'centralus',
  },
  {
    properties: {
      summary: 'When a task is completed',
      description: 'This operation triggers when a task is marked as complete.',
      visibility: 'advanced',
      trigger: 'single',
      triggerHint: 'To see it work, complete a task.',
      pageable: false,
      isChunkingSupported: false,
      annotation: { status: 'Production', family: 'Trigger_OnCompletedTask', revision: 1 },
      api: {
        name: 'outlooktasks',
        displayName: 'Outlook Tasks',
        description:
          'Outlook Tasks service lets you create, read, synchronize, update and delete your tasks that are secured by Azure Active Directory in Office 365 or a Microsoft account.',
        iconUri: 'https://connectoricons-prod.azureedge.net/releases/v1.0.1445/1.0.1445.2347/outlooktasks/icon.png',
        brandColor: '#0072c6',

        id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/outlooktasks',
        type: 'Microsoft.Web/locations/managedApis',
      },
      isWebhook: false,
      isNotification: false,
      externalDocs: { url: 'https://docs.microsoft.com/connectors/outlooktasks/#when-a-task-is-completed' },
    },
    id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/outlooktasks/apiOperations/Trigger_OnCompletedTask',
    name: 'Trigger_OnCompletedTask',
    type: 'Microsoft.Web/locations/managedApis/apiOperations',
    location: 'centralus',
  },
  {
    properties: {
      summary: 'When a dataflow refresh completes',
      description: 'This operation triggers when a dataflow refresh completes.',
      visibility: 'important',
      trigger: 'single',
      triggerHint: 'To see it work now, initiate a new dataflow refresh.',
      pageable: false,
      isChunkingSupported: false,
      annotation: { status: 'Production', family: 'OnRefreshComplete', revision: 1 },
      api: {
        name: 'dataflows',
        displayName: 'Power Query Dataflows',
        description:
          "Dataflows are a self-service, cloud-based, data preparation technology that allows you to ingest, transform and load data into Common Data Service environments, Power BI workspaces or your organization's Azure Data Lake Gen2 account.",
        iconUri: 'https://connectoricons-prod.azureedge.net/releases/v1.0.1567/1.0.1567.2748/dataflows/icon.png',
        brandColor: '#6264A7',

        id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/dataflows',
        type: 'Microsoft.Web/locations/managedApis',
      },
      isWebhook: false,
      isNotification: false,
      externalDocs: { url: 'https://docs.microsoft.com/connectors/dataflows/#when-a-dataflow-refresh-completes' },
    },
    id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/dataflows/apiOperations/OnRefreshComplete',
    name: 'OnRefreshComplete',
    type: 'Microsoft.Web/locations/managedApis/apiOperations',
    location: 'centralus',
  },
  {
    properties: {
      summary: 'When an Azure Security Center Alert is created or triggered',
      description:
        'Triggers when an alert is created in Security Center and matches the evaluation criteria configured in an automation, or when manually run on a specific alert.\nNote: automated running of this trigger requires enabling automation in Azure Security Center and enabling the Standard tier as a preliminary step.\nPlease visit Azure Security Center to do so.',
      trigger: 'single',
      pageable: false,
      isChunkingSupported: false,
      annotation: { status: 'Production', family: 'ASCAlert_trigger_subscribe', revision: 1 },
      api: {
        name: 'ascalert',
        displayName: 'Security Center Alert',
        description:
          "Azure Security Center is a unified infrastructure security management system that strengthens the security posture of your data centers, and provides advanced threat protection across your hybrid workloads in the cloud - whether they're in Azure or not - as well as on premises",
        iconUri: 'https://connectoricons-prod.azureedge.net/releases/v1.0.1554/1.0.1554.2707/ascalert/icon.png',
        brandColor: '#95C515',
        id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/ascalert',
        type: 'Microsoft.Web/locations/managedApis',
      },
      isWebhook: true,
      isNotification: false,
      externalDocs: {
        url: 'https://docs.microsoft.com/connectors/ascalert/#when-an-azure-security-center-alert-is-created-or-triggered',
      },
    },
    id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/ascalert/apiOperations/ASCAlert_trigger_subscribe',
    name: 'ASCAlert_trigger_subscribe',
    type: 'Microsoft.Web/locations/managedApis/apiOperations',
    location: 'centralus',
  },
  {
    properties: {
      summary: 'When an Azure Security Center Recommendation is created or triggered',
      description:
        'Triggers when a recommendation is created in Security Center and matches the evaluation criteria configured in an automation, or when manually run on a specific recommendation.\nNote: automated running of this trigger requires enabling automation in Azure Security Center.\nPlease visit Azure Security Center to do so.',
      trigger: 'single',
      pageable: false,
      isChunkingSupported: false,
      annotation: { status: 'Production', family: 'ASCAssessment_trigger_subscribe', revision: 1 },
      api: {
        name: 'ascassessment',
        displayName: 'Security Center Recommendation',
        description:
          "Azure Security Center is a unified infrastructure security management system that strengthens the security posture of your data centers, and provides advanced threat protection across your hybrid workloads in the cloud - whether they're in Azure or not - as well as on premises",
        iconUri: 'https://connectoricons-prod.azureedge.net/releases/v1.0.1514/1.0.1514.2551/ascassessment/icon.png',
        brandColor: '#95C515',

        id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/ascassessment',
        type: 'Microsoft.Web/locations/managedApis',
      },
      isWebhook: true,
      isNotification: false,
      externalDocs: {
        url: 'https://docs.microsoft.com/connectors/ascassessment/#when-an-azure-security-center-recommendation-is-created-or-triggered',
      },
    },
    id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/ascassessment/apiOperations/ASCAssessment_trigger_subscribe',
    name: 'ASCAssessment_trigger_subscribe',
    type: 'Microsoft.Web/locations/managedApis/apiOperations',
    location: 'centralus',
  },
  {
    properties: {
      summary: 'When a Security Center Regulatory Compliance Assessment is created or triggered',
      description:
        'Triggers when a regulatory compliance assessment is created in Security Center and matches the evaluation criteria configured in an automation. Note: automated running of this trigger requires enabling automation in Azure Security Center. Please visit Azure Security Center to do so.',
      trigger: 'single',
      pageable: false,
      isChunkingSupported: false,
      annotation: { status: 'Preview', family: 'ASCRegulatoryComplianceAssessment_trigger_subscribe', revision: 1 },
      api: {
        name: 'ascregulatorycomplianceassessment',
        displayName: 'Security Center Regulatory Compliance',
        description:
          "Azure Security Center is a unified infrastructure security management system that strengthens the security posture of your data centers, and provides advanced threat protection across your hybrid workloads in the cloud - whether they're in Azure or not - as well as on premises",
        iconUri: 'https://connectoricons-prod.azureedge.net/releases/v1.0.1511/1.0.1511.2542/ascregulatorycomplianceassessment/icon.png',
        brandColor: '#95C515',

        id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/ascregulatorycomplianceassessment',
        type: 'Microsoft.Web/locations/managedApis',
      },
      isWebhook: true,
      isNotification: false,
      externalDocs: {
        url: 'https://docs.microsoft.com/connectors/ascregulatorycomplianceassessment/#when-a-security-center-regulatory-compliance-assessment-is-created-or-triggered',
      },
    },
    id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/ascregulatorycomplianceassessment/apiOperations/ASCRegulatoryComplianceAssessment_trigger_subscribe',
    name: 'ASCRegulatoryComplianceAssessment_trigger_subscribe',
    type: 'Microsoft.Web/locations/managedApis/apiOperations',
    location: 'centralus',
  },
  {
    properties: {
      summary: 'When one or more messages arrive in a queue (auto-complete)',
      description:
        'The operation receives one or more messages from a queue. If maximum message count is not provided, it reads 20 messages.',
      visibility: 'important',
      trigger: 'batch',
      pageable: false,
      isChunkingSupported: false,
      annotation: { status: 'Production', family: 'GetMessagesFromQueue', revision: 1 },
      api: {
        name: 'servicebus',
        displayName: 'Service Bus',
        description:
          'Connect to Azure Service Bus to send and receive messages. You can perform actions such as send to queue, send to topic, receive from queue, receive from subscription, etc.',
        iconUri: 'https://connectoricons-prod.azureedge.net/releases/v1.0.1568/1.0.1568.2757/servicebus/icon.png',
        brandColor: '#c4d5ff',

        id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/servicebus',
        type: 'Microsoft.Web/locations/managedApis',
      },
      isWebhook: false,
      isNotification: false,
      externalDocs: {
        url: 'https://docs.microsoft.com/connectors/servicebus/#when-one-or-more-messages-arrive-in-a-queue-(auto-complete)',
      },
    },
    id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/servicebus/apiOperations/GetMessagesFromQueue',
    name: 'GetMessagesFromQueue',
    type: 'Microsoft.Web/locations/managedApis/apiOperations',
    location: 'centralus',
  },
  {
    properties: {
      summary: 'When one or more messages arrive in a topic (auto-complete)',
      description:
        'The operation receives one or more messages from a topic. If maximum message count is not provided, it reads 20 messages.',
      visibility: 'important',
      trigger: 'batch',
      pageable: false,
      isChunkingSupported: false,
      annotation: { status: 'Production', family: 'GetMessagesFromTopic', revision: 1 },
      api: {
        name: 'servicebus',
        displayName: 'Service Bus',
        description:
          'Connect to Azure Service Bus to send and receive messages. You can perform actions such as send to queue, send to topic, receive from queue, receive from subscription, etc.',
        iconUri: 'https://connectoricons-prod.azureedge.net/releases/v1.0.1568/1.0.1568.2757/servicebus/icon.png',
        brandColor: '#c4d5ff',

        id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/servicebus',
        type: 'Microsoft.Web/locations/managedApis',
      },
      isWebhook: false,
      isNotification: false,
      externalDocs: {
        url: 'https://docs.microsoft.com/connectors/servicebus/#when-one-or-more-messages-arrive-in-a-topic-(auto-complete)',
      },
    },
    id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/servicebus/apiOperations/GetMessagesFromTopic',
    name: 'GetMessagesFromTopic',
    type: 'Microsoft.Web/locations/managedApis/apiOperations',
    location: 'centralus',
  },
  {
    properties: {
      summary: 'When one or more messages arrive in a queue (peek-lock)',
      description:
        'The operation receives one or more messages from a queue with peek-lock. If maximum message count is not provided, it reads 20 messages.',
      visibility: 'advanced',
      trigger: 'batch',
      pageable: false,
      isChunkingSupported: false,
      annotation: { status: 'Production', family: 'GetNewMessagesFromQueueWithPeekLock', revision: 1 },
      api: {
        name: 'servicebus',
        displayName: 'Service Bus',
        description:
          'Connect to Azure Service Bus to send and receive messages. You can perform actions such as send to queue, send to topic, receive from queue, receive from subscription, etc.',
        iconUri: 'https://connectoricons-prod.azureedge.net/releases/v1.0.1568/1.0.1568.2757/servicebus/icon.png',
        brandColor: '#c4d5ff',

        id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/servicebus',
        type: 'Microsoft.Web/locations/managedApis',
      },
      isWebhook: false,
      isNotification: false,
      externalDocs: {
        url: 'https://docs.microsoft.com/connectors/servicebus/#when-one-or-more-messages-arrive-in-a-queue-(peek-lock)',
      },
    },
    id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/servicebus/apiOperations/GetNewMessagesFromQueueWithPeekLock',
    name: 'GetNewMessagesFromQueueWithPeekLock',
    type: 'Microsoft.Web/locations/managedApis/apiOperations',
    location: 'centralus',
  },
  {
    properties: {
      summary: 'When one or more messages arrive in a topic (peek-lock)',
      description:
        'The operation receives one or more messages from a topic with peek-lock. If maximum message count is not provided, it reads 20 messages.',
      visibility: 'advanced',
      trigger: 'batch',
      pageable: false,
      isChunkingSupported: false,
      annotation: { status: 'Production', family: 'GetNewMessagesFromTopicWithPeekLock', revision: 1 },
      api: {
        name: 'servicebus',
        displayName: 'Service Bus',
        description:
          'Connect to Azure Service Bus to send and receive messages. You can perform actions such as send to queue, send to topic, receive from queue, receive from subscription, etc.',
        iconUri: 'https://connectoricons-prod.azureedge.net/releases/v1.0.1568/1.0.1568.2757/servicebus/icon.png',
        brandColor: '#c4d5ff',

        id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/servicebus',
        type: 'Microsoft.Web/locations/managedApis',
      },
      isWebhook: false,
      isNotification: false,
      externalDocs: {
        url: 'https://docs.microsoft.com/connectors/servicebus/#when-one-or-more-messages-arrive-in-a-topic-(peek-lock)',
      },
    },
    id: '/subscriptions/4201f397-837b-48ea-8943-980767f294ac/providers/Microsoft.Web/locations/centralus/managedApis/servicebus/apiOperations/GetNewMessagesFromTopicWithPeekLock',
    name: 'GetNewMessagesFromTopicWithPeekLock',
    type: 'Microsoft.Web/locations/managedApis/apiOperations',
    location: 'centralus',
  },
];

export const MockSearchOperations: DiscoveryOperation<DiscoveryResultTypes>[] = [...MockSearchOperationsBuiltIn, ...MockAzureOperation];
