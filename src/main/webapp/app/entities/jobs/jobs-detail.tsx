import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './jobs.reducer';

export const JobsDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const jobsEntity = useAppSelector(state => state.jobs.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="jobsDetailsHeading">
          <Translate contentKey="demoSpringReactApp.jobs.detail.title">Jobs</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{jobsEntity.id}</dd>
          <dt>
            <span id="title">
              <Translate contentKey="demoSpringReactApp.jobs.title">Title</Translate>
            </span>
          </dt>
          <dd>{jobsEntity.title}</dd>
          <dt>
            <span id="slug">
              <Translate contentKey="demoSpringReactApp.jobs.slug">Slug</Translate>
            </span>
          </dt>
          <dd>{jobsEntity.slug}</dd>
          <dt>
            <span id="featureImage">
              <Translate contentKey="demoSpringReactApp.jobs.featureImage">Feature Image</Translate>
            </span>
          </dt>
          <dd>{jobsEntity.featureImage}</dd>
          <dt>
            <span id="validFrom">
              <Translate contentKey="demoSpringReactApp.jobs.validFrom">Valid From</Translate>
            </span>
          </dt>
          <dd>{jobsEntity.validFrom ? <TextFormat value={jobsEntity.validFrom} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="validThrough">
              <Translate contentKey="demoSpringReactApp.jobs.validThrough">Valid Through</Translate>
            </span>
          </dt>
          <dd>{jobsEntity.validThrough ? <TextFormat value={jobsEntity.validThrough} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="status">
              <Translate contentKey="demoSpringReactApp.jobs.status">Status</Translate>
            </span>
          </dt>
          <dd>{jobsEntity.status}</dd>
          <dt>
            <span id="createdBy">
              <Translate contentKey="demoSpringReactApp.jobs.createdBy">Created By</Translate>
            </span>
          </dt>
          <dd>{jobsEntity.createdBy}</dd>
          <dt>
            <span id="createdDate">
              <Translate contentKey="demoSpringReactApp.jobs.createdDate">Created Date</Translate>
            </span>
          </dt>
          <dd>{jobsEntity.createdDate ? <TextFormat value={jobsEntity.createdDate} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="updateDate">
              <Translate contentKey="demoSpringReactApp.jobs.updateDate">Update Date</Translate>
            </span>
          </dt>
          <dd>{jobsEntity.updateDate ? <TextFormat value={jobsEntity.updateDate} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="updateBy">
              <Translate contentKey="demoSpringReactApp.jobs.updateBy">Update By</Translate>
            </span>
          </dt>
          <dd>{jobsEntity.updateBy}</dd>
          <dt>
            <Translate contentKey="demoSpringReactApp.jobs.category">Category</Translate>
          </dt>
          <dd>{jobsEntity.category ? jobsEntity.category.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/jobs" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/jobs/${jobsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default JobsDetail;
