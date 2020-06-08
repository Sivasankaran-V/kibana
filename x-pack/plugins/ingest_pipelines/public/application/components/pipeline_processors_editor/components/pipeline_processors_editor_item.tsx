/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React, { FunctionComponent, memo } from 'react';
import { EuiButtonIcon, EuiFlexGroup, EuiFlexItem, EuiToolTip } from '@elastic/eui';
import { i18n } from '@kbn/i18n';

import { ProcessorInternal } from '../types';

export interface Handlers {
  onMove: () => void;
  onCancelMove: () => void;
  onAddOnFailure: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
}

export interface Props {
  processor: ProcessorInternal;
  selected: boolean;
  handlers: Handlers;
}

export const PipelineProcessorsEditorItem: FunctionComponent<Props> = memo(
  ({
    processor,
    handlers: { onMove, onCancelMove, onAddOnFailure, onEdit, onDelete, onDuplicate },
    selected,
  }) => {
    return (
      <EuiFlexGroup
        gutterSize="none"
        responsive={false}
        alignItems="center"
        justifyContent="spaceBetween"
      >
        <EuiFlexItem>
          <EuiFlexGroup gutterSize="m" alignItems="center" responsive={false}>
            <EuiFlexItem grow={false} className="pipelineProcessorsEditor__tree__item__name">
              <b>{processor.type}</b>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiToolTip
                content={i18n.translate(
                  'xpack.ingestPipelines.pipelineEditor.editProcessorButtonLabel',
                  {
                    defaultMessage: 'Edit this processor',
                  }
                )}
              >
                <EuiButtonIcon
                  aria-label={i18n.translate(
                    'xpack.ingestPipelines.pipelineEditor.editProcessorButtonAriaLabel',
                    {
                      defaultMessage: 'Edit this processor',
                    }
                  )}
                  iconType="pencil"
                  size="s"
                  onClick={onEdit}
                />
              </EuiToolTip>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiToolTip
                content={i18n.translate(
                  'xpack.ingestPipelines.pipelineEditor.addOnFailureHandlerProcessorButtonLabel',
                  {
                    defaultMessage: 'Add on failure handler',
                  }
                )}
              >
                <EuiButtonIcon
                  aria-label={i18n.translate(
                    'xpack.ingestPipelines.pipelineEditor.addOnFailureHandlerProcessorButtonAriaLabel',
                    {
                      defaultMessage: 'Add on failure handler',
                    }
                  )}
                  iconType="indexClose"
                  size="s"
                  onClick={onAddOnFailure}
                />
              </EuiToolTip>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiToolTip
                content={i18n.translate(
                  'xpack.ingestPipelines.pipelineEditor.duplicateProcessorButtonLabel',
                  {
                    defaultMessage: 'Duplicate this processor',
                  }
                )}
              >
                <EuiButtonIcon
                  aria-label={i18n.translate(
                    'xpack.ingestPipelines.pipelineEditor.duplicateProcessorButtonAriaLabel',
                    {
                      defaultMessage: 'Duplicate this processor',
                    }
                  )}
                  iconType="copy"
                  size="s"
                  onClick={onDuplicate}
                />
              </EuiToolTip>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              {selected ? (
                <EuiToolTip
                  content={i18n.translate(
                    'xpack.ingestPipelines.pipelineEditor.moveProcessorButtonLabel',
                    {
                      defaultMessage: 'Cancel moving this processor',
                    }
                  )}
                >
                  <EuiButtonIcon
                    aria-label={i18n.translate(
                      'xpack.ingestPipelines.pipelineEditor.moveProcessorButtonAriaLabel',
                      {
                        defaultMessage: 'Cancel moving this processor',
                      }
                    )}
                    size="s"
                    onClick={onCancelMove}
                    iconType="crossInACircleFilled"
                  />
                </EuiToolTip>
              ) : (
                <EuiToolTip
                  content={i18n.translate(
                    'xpack.ingestPipelines.pipelineEditor.moveProcessorButtonLabel',
                    {
                      defaultMessage: 'Move this processor',
                    }
                  )}
                >
                  <EuiButtonIcon
                    aria-label={i18n.translate(
                      'xpack.ingestPipelines.pipelineEditor.moveProcessorButtonAriaLabel',
                      {
                        defaultMessage: 'Move this processor',
                      }
                    )}
                    size="s"
                    onClick={onMove}
                    iconType="sortable"
                  />
                </EuiToolTip>
              )}
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiToolTip
            content={i18n.translate(
              'xpack.ingestPipelines.pipelineEditor.deleteProcessorButtonLabel',
              {
                defaultMessage: 'Delete this processor',
              }
            )}
          >
            <EuiButtonIcon
              aria-label={i18n.translate(
                'xpack.ingestPipelines.pipelineEditor.deleteProcessorButtonAriaLabel',
                {
                  defaultMessage: 'Delete this processor',
                }
              )}
              iconType="trash"
              color="danger"
              size="s"
              onClick={onDelete}
            />
          </EuiToolTip>
        </EuiFlexItem>
      </EuiFlexGroup>
    );
  },
  (prev, current) => {
    return (
      prev.handlers === current.handlers &&
      prev.processor.id === current.processor.id &&
      prev.processor.type === current.processor.type &&
      prev.selected === current.selected
    );
  }
);
