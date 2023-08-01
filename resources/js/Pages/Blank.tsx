import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import ContentHeader from '@/Components/ContentHeader';

export default function Blank() {
  return (
    <MainLayout title="Blank">
      <div>
        <ContentHeader title="Blank" />

        <section className="content">
          <div className="container-fluid">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Title</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-widget="collapse"
                    data-toggle="tooltip"
                    title="Collapse"
                  >
                    <i className="fa fa-minus" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-widget="remove"
                    data-toggle="tooltip"
                    title="Remove"
                  >
                    <i className="fa fa-times" />
                  </button>
                </div>
              </div>
              <div className="card-body">
                Start creating your amazing application!
              </div>
              <div className="card-footer">Footer</div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
